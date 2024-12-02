// Tools for creating our SVG badge

type SectionInfo = {
    id: string;
    title: string;
    count: int;
    checked: int;
}

function extract_badge_info(): SectionInfo[] {
    const section_divs = document.querySelectorAll("#badge-quiz .quiz-section");
    const results: SectionInfo[] = [];
    for (let section of section_divs) {
        const section_id = section.id;
        const section_title: string = section.querySelector(".section-title").innerText;
        const section_count: number = section.querySelectorAll("input[type='checkbox']").length;
        const section_checked: number = section.querySelectorAll("input[type='checkbox']:checked").length;
        results.push({
            id: section_id,
            title: section_title,
            count: section_count,
            checked: section_checked
        });
    }
    return results;
}

class Badge {
    input_data: SectionInfo[];
    svg_ns: string = "http://www.w3.org/2000/svg";
    bkgd: string = '#d0ece1';
    progfill: string = '#3d5a80';
    offset: number = 50;
    spacing: number = 40;

    constructor(input_data: SectionInfo[]) {
        this.input_data = input_data;
    }

    getWidth(): number {
        return 400;
    }

    getHeight(): number {
        return this.offset + this.spacing * this.input_data.length;
    }

    createBackground(width: number, height: number): HTMLElement {
        const badge_rounding: number = 5;
        const background: HTMLElement = document.createElementNS(this.svg_ns, 'rect');
        //const background: HTMLElement = document.createElement('rect');
        background.setAttribute('x', 0);
        background.setAttribute('y', 0);
        background.setAttribute('width', width);
        background.setAttribute('height', height);
        background.setAttribute('fill', this.bkgd);
        background.setAttribute('stroke', this.progfill);
        background.setAttribute('rx', badge_rounding);
        background.setAttribute('ry', badge_rounding);
        background.setAttribute('class', 'background');
        return background;
    }

    addSection(num: number, section: SectionInfo): HTMLElement {
        const section_g: HTMLElement = document.createElementNS(this.svg_ns, 'g');
        section_g.setAttribute('class', 'section');

        const section_x: number = 10;
        const section_y: number = this.offset + this.spacing * num;

        // title
        const section_title: HTMLElement = document.createElementNS(this.svg_ns, 'text');
        section_title.setAttribute('x', 10);
        section_title.setAttribute('y', section_y);
        section_title.setAttribute('font-size', 14);
        section_title.innerHTML = `${section.title}: (${section.checked}/${section.count})`;
        section_g.appendChild(section_title);

        const progbar_y = section_y + 10;
        const progbar_width = this.getWidth() - 2 * section_x;
        const progbar_height = 10;
        const progbar_rounding = 5;

        // progress bar
        const progress: HTMLElement = document.createElementNS(this.svg_ns, 'rect');
        progress.setAttribute('x', section_x);
        progress.setAttribute('y', progbar_y);
        progress.setAttribute('width', progbar_width);
        progress.setAttribute('height', progbar_height);
        progress.setAttribute('fill', this.bkgd);
        progress.setAttribute('stroke', this.progfill);
        progress.setAttribute('rx', progbar_rounding);
        progress.setAttribute('ry', progbar_rounding);
        section_g.appendChild(progress);

        // progress fill
        const fraction: number = section.checked / section.count;
        const progress_fill: HTMLElement = document.createElementNS(this.svg_ns, 'rect');
        progress_fill.setAttribute('x', section_x);
        progress_fill.setAttribute('y', progbar_y);
        progress_fill.setAttribute('width', progbar_width * fraction);
        progress_fill.setAttribute('height', progbar_height);
        progress_fill.setAttribute('fill', this.progfill);
        progress_fill.setAttribute('rx', progbar_rounding);
        progress_fill.setAttribute('ry', progbar_rounding);
        section_g.appendChild(progress_fill);

        return section_g;

    }

    make_title(): HTMLElement {
        const title: string = document.getElementById('badge-name').value;
        const svg_text: HTMLElement = document.createElementNS(this.svg_ns, 'text');
        svg_text.setAttribute('x', 10);
        svg_text.setAttribute('y', 20);
        svg_text.setAttribute('font-size', 20);
        svg_text.innerHTML = title;
        return svg_text;
    }

    make_badge(): HTMLElement {
        const height: number = this.getHeight();
        const width: number = this.getWidth();
        const svg: HTMLElement = document.createElementNS(this.svg_ns, 'svg');
        //const svg: HTMLElement = document.createElement('svg');
        svg.setAttribute('xmlns', this.svg_ns);
        svg.setAttribute('version', '1.1');
        svg.setAttribute('width', width);
        svg.setAttribute('height', height);
        svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
        svg.appendChild(this.createBackground(width, height));

        svg.appendChild(this.make_title());

        this.input_data.forEach((section, index) => {
            svg.appendChild(this.addSection(index, section, this.offset));
        });

        return svg;
    }
}

// eventListener for the badge form submit
document.getElementById('badge-quiz').addEventListener('submit', function(event) {
    event.preventDefault();
    const badge_info: SectionInfo[] = extract_badge_info();
    console.log(badge_info);
    const badge: Badge = new Badge(badge_info);
    document.getElementById('badge').appendChild(badge.make_badge());
    // hide the quiz and show the badge
    document.getElementById('badge-quiz').style.display = 'none';
    document.getElementById('badge-container').style.display = 'block';
});

// eventListener for the badge form reset
document.getElementById('badge-quiz').addEventListener('reset', function(event) {
    // hide the badge and show the quiz
    document.getElementById('badge-quiz').style.display = 'block';
    document.getElementById('badge-container').style.display = 'none';
    document.getElementById('badge').innerHTML = '';
});

// download the badge when the download-badge button is clicked
document.getElementById('download-badge').addEventListener('click', function(event) {
    console.log('downloading badge');
    const svg = document.getElementById('badge').innerHTML;
    const blob = new Blob([svg], {type: 'image/svg+xml'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'badge.svg';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});
