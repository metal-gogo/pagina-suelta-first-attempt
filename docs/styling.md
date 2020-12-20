# Styling

The following document outlines our principles for writing consistent, idiomatic, and scalable styles (CSS/SCSS). These guidelines strongly encourage the use of existing, common, sensible patterns. They have been adapted as needed to create our own style guide. Small or large, call out what's incorrect. This is a living document and new ideas are always welcome. Please contribute.

- [Styling](#styling)
  - [General Principles](#general-principles)
  - [CSS Architecture](#css-architecture)
  - [Naming conventions](#naming-conventions)
  - [Inspiration](#inspiration)

## General Principles

- Every line of code should appear to be written by a single person, no matter the number of contributors.
- Keep it readable and understandable. Optimize only when needed.
- Strictly enforce the agreed-upon style.
- Even though this is a guide for styling, strive to maintain HTML standards and semantics, but with practicality in mind. Use the least amount of markup with the fewest intricacies whenever possible.
- When in doubt, decide using existing, common patterns upon a style.
- Challenge the status quo. If there is something that bugs you, raise your voice.

## CSS Architecture

The styles of this project are organized with [ITCSS][itcss], a methodology created by [Harry Roberts][harry_roberts] for organizing CSS files within layers-from generic to explicit, and from low to high specificity. Next you'll see an overview of the layers on _ITCSS_:

- **Settings** – Layer used with pre-processors and contain font, breakpoints, colors definitions, etc. It’s important not to output any CSS in this layer.
- **Tools** – Layer used for mixins and functions. It’s important not to output any CSS in this layer.
- **Generic** – Layer used to reset and/or normalize styles, box-sizing definition, etc. This is the first layer which generates actual CSS.
- **Elements** – Layer used for styling for bare HTML elements (like H1, A, etc.). These come with default styling from the browser so we can redefine them here.
- **Objects** – Layer used for class-based selectors which define undecorated design patterns, for example media object known from [OOCSS][oocss]. However, we rather not use this layer, as all the styles of the app should be inside the **Components** layer.
- **Components** – Layer used for specific UI components. This is where the majority of our work takes place and our UI components are often composed of Objects and Components. We keep all our components within its own directory, and its styles should live in that directory as well.
- **Utilities** – Layer for utilities and helper classes with ability to override anything which goes before in the triangle, eg. hide helper class. This layer shouldn't be used unless something awful happens.

## Naming conventions

We are using [BEM][bem] for our naming conventions. It is also enforced on our linting.

## Inspiration

We admire the great work from different projects. We have found heavy inspiration on the following sources:

- [Bootstrap reboot][bootstrap_reboot] to provide an elegant, consistent and simple baseline to build upon.
- [Harry Roberts][harry_roberts] work on CSS to write scalable CSS.
- [Mark Otto's style guides][code_guide] to have a set of standards for developing consistent, flexible, and sustainable HTML and CSS.
- [Idiomatic CSS][idiomatic_css] to provide guidelines to use existing, common, and sensible patterns adapted to our needs.

[itcss]: https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/
[harry_roberts]: https://csswizardry.com/
[oocss]: http://oocss.org/
[bem]: http://getbem.com/
[bootstrap_reboot]: https://getbootstrap.com/docs/4.0/content/reboot/
[code_guide]: https://codeguide.co/
[idiomatic_css]: https://github.com/necolas/idiomatic-css



