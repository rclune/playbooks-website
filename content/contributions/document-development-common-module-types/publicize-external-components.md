---
layout: practice
weight: 3
title: If components should be external, provide a mechanism to publicize them
what: >
  There should be a listing of components from external contributors. This
  might come with a caveat that these are not developed or supported by the
  core team.
why: >
  This provides a way to connect your users with your external contributors,
  which encourages both groups to be more involved with your software
  ecosystem.
when: >
  Once you are aware of external contributions
---

In some cases, teams prefer to that contributions remain external to the core
library. This is often to reduce the maintenance burden on the core team, or to
prevent dependency bloat. So external contributions are instead treated as
plugins or kits that build on the core library.

While that's a perfectly reasonable decision to make, the problem is that you
now have no way to connect your users with the external contributions. Creating
such a mechanism is both a way to help your users and to reward the efforts of
external contributors, thus encouraging more contributions.
