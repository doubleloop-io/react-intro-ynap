### We won't talk about...

-   Typescript
-   Redux/MobX/xState/Recoil/Apollo/...

### History

-   In production at Facebook since 2011
-   Open sourced ~2013
-   Heavily influenced the landscape of FE development since ~2015

### Vision Approach

-   Only the view layer. It's a library not a framework by choice. Data fetching, app state management, client side routing, form handling, etc agnostic. (pros and cons)
-   Writing manintable codebases (keep accidental complexity low)
    -   Component centric development
        1. Component all the way down
        2. Unit of change is a component ⇒ keep together what changes together.
    -   Mutable state is a source of complexity
        -   Implicit way of changing a piece of UI. Ripple of changes more difficult to track ⇒ there will be unintended consequences
        -   More explicit is: change state -> re-render entire UI
            -   Single API to change state and trigger re-rendering -> setState(newState)
            -   AKA Unidirectional flow of data (props and state)

### Data & components

-   Props

    -   Pass as an attribute, get as a function parameter
    -   Passed from parent. Easier to track rendering bugs
    -   Read-only (even if you change it nothing happens)
    -   If a comp only use props, it's a stateless comp. Very easy to reason about

-   State
    -   Created inside a component. Cannot be changed from the outside (private)
    -   Mutable
        -   const [name, setName] = useState() to create it
        -   name to read it, setName(...) to change it
    -   Stateful comp. -> With great power comes...

### Misc

-   JSX = HTML in JS
-   Virtual DOM
    -   diff delta
    -   DOM reconcilation
