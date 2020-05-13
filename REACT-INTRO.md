### We won't talk about...

-   Typescript
-   xstate

### History

-   In production at Facebook since 2011
-   Open sourced ~2013
-   Heavily influenced the landscape of FE development since ~2015

### Vision Approach

-   Only the view layer. It's a library not a framework by choice. Data fetching, Data management, Client side routing, From handling, etc agnostic. (pros and cons)
-   Writing manintable codebases (keep accidental complexity low)
    -   Component centric development
        1. Component all the way down
        2. Unit of change is a component ⇒ keep together what changes together.
    -   Mutable state is a source of complexity (ripple of changes more difficult to track ⇒ there will be unintended consequences)
        -   Alternative: Unidirectional flow of data (props and state)

### Misc

-   JSX = HTML in JS
-   Virtual DOM
    -   diff delta
    -   DOM reconcilation
