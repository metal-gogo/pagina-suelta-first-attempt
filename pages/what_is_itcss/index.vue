<template>
  <article class="container">
    <h1 class="title">What is ITCSS?</h1>
    <p>
      <strong>ITCSS</strong> refers to Inverted Triangle CSS, a term introduced
      by Harry Roberts (@csswizardry), to deal with the increasing complexity of
      managing projects with CSS. This methodology helps you organize your CSS
      projects in a sane and scalable.
    </p>
    <p>
      Before diving deep into ITCSS, I want to review the three aspects of CSS
      that it tries to address: CSS global scope, Selectors specificity, and CSS
      cascade.
    </p>
    <h2 class="title">CSS global scope</h2>
    <img
      src="/images/global scope css.png"
      alt="CSS rule on the html element"
      class="image"
    />
    <p>
      Except for some form elements, you've just set a font on every bit of text
      on a site. That's what you were trying to do, probably. Setting that
      font-family every time would be tedious and error-prone.
    </p>
    <p>CSS is global by nature. <strong>On purpose!</strong></p>
    <p>But why?</p>
    <p>
      We want to use consistent typography, colors, sizing, spacing, layout,
      transitions, etc., and have our websites & apps feel like one cohesive
      unit.
    </p>
    <p>
      Nevertheless, the global nature of CSS is perhaps the most-pointed-at
      anti-feature of CSS. Some people don’t like it. We all know it’s very easy
      to write a single CSS rule that has implications all over a site, breaking
      things you really didn’t want to break.
    </p>
    <p>
      Even though we want consistency around our application, there are
      occasions on which we prefer to have a local impact. That's why the
      frontend community has built CSS Modules. Vue achieves this by adding the
      <strong>scoped</strong> keyword on the style tag.
    </p>
    <img
      src="/images/vue scoped example.png"
      alt="Example of how Vue converts the scoped CSS into a very specific CSS"
      class="image"
    />
    <h2 class="title">Selectors specificity</h2>
    <p>
      <strong>Specificity</strong> is how browsers decide which CSS property
      values are the most relevant to an element and, therefore, will be
      applied. Browsers base specificity on the matching rules which, are
      composed of different sorts of CSS selectors.
    </p>
    <p>
      Specificity is a weight set by browsers to a given CSS declaration,
      determined by the number of each selector type in the matching selector.
      When multiple declarations have equal specificity, the last declaration
      found in the CSS is rendered. As per CSS rules, directly targeted elements
      will always take precedence over rules which an element inherits from its
      ancestor.
    </p>
    <p>The following list of selector types increases by specificity:</p>
    <ol>
      <li>Type selectors (e.g., h1) and pseudo-elements (e.g., ::before).</li>
      <li>
        Class selectors (e.g., .example), attributes selectors (e.g.,
        [type="radio"]), and pseudo-classes (e.g., :hover).
      </li>
      <li>ID selectors (e.g., #example).</li>
    </ol>
    <img
      src="/images/css specifishity.png"
      alt="CSS specificity explained with plankton, fish, and sharks"
      class="image"
    />
    <h2 class="title">CSS Cascade</h2>
    <p>
      <strong>CSS</strong> stands for Cascading Style Sheets, and that first
      word cascading is essential to understand — the way that the cascade
      behaves is key to understanding CSS.
    </p>
    <p>
      Stylesheets <strong>cascade</strong> — at an elementary level, this means
      that the order of CSS rules matters; when two rules apply that have equal
      specificity, the one that comes last in the CSS is the one used.
    </p>
    <img
      src="/images/css cascade example.png"
      alt="Example of CSS cascade applying two styles to h1 tags"
      class="image"
    />
    <h2 class="title">The Specificity Graph</h2>
    <p>
      Harry Roberts introduced the term "The Specificity Graph" in 2014. The
      specificity graph is a visual representation of how specific the code is
      regarding its position in the CSS code. With this graph, we can determine
      how specific our code is and how many rules are overridden.
    </p>
    <p>
      The specificity graph is a straightforward model for diagrammatically
      assessing your's codebase overall health in terms of specificity. With a
      screenshot, you can look at an entire project's CSS and highlight any
      potentially troublesome areas of higher-than-ideal specificity.
    </p>
    <p>
      It is worth highlighting explicitly and upfront that the Specificity Graph
      is just a high-level and relatively crude model. It aims to give a
      comprehensive and general overview of the selectors' specificity across an
      entire project.
    </p>
    <h3>Example 1: Exposé page on Kirby</h3>
    <img
      src="/images/kirby expose page specificity graph.png"
      alt="Specificity graph of the expose page on Kirby"
      class="image"
    />
    <h3>Example 2: Exposé page on myHomeday</h3>
    <img
      src="/images/my homeday expose specificity graph.png"
      alt="Specificity graph of the expose page on myHomeday"
      class="image"
    />
    <h3>Example 3: This demo</h3>
    <img
      src="/images/demo specificity graph.png"
      alt="Specificity graph of this web page"
      class="image"
    />
    <h3>Example 4: better specificity graph proposed by Harry Roberts</h3>
    <img
      src="/images/better specificity graph.png"
      alt="Example specificity graph shown by Harry Roberts"
      class="image"
    />
    <h2 class="title">So... What is ITCSS?</h2>
    <p>
      <strong>ITCSS</strong> is a CSS architecture and not a library. You can
      see it as a mindset, therefore it works well with preprocessors (LESS,
      SCSS, Stylus) and is entirely compatible with methodologies like BEM,
      SMACSS, and OOCSS.
    </p>
    <p>
      The specificity graph is the cornerstone for the ITCSS. This architecture
      will try to ensure that we write our code following these guidelines:
    </p>
    <h3>Generic to explicit</h3>
    <p>
      We start with the most generic, low-level, catch-all, unremarkable styles
      and eventually progress to more explicit and specific rules as we move
      through the project.
    </p>
    <h3>Low specificity to high specificity</h3>
    <p>
      The lowest-specificity selectors appear towards the beginning, with
      specificity steadily increasing as we progress through the project. We
      want to ensure that we avoid as much of the Specificity Wars as we can, so
      we try and refrain from writing higher-specificity selectors before
      lower-specificity ones. We're always adding specificity in the same
      direction, thus avoiding conflicts.
    </p>
    <h3>Far-reaching to localized</h3>
    <p>
      Selectors towards the beginning of the project affect a lot of the DOM,
      with that reach progressively lessened as we go through the codebase. We
      want to make 'passes' over the DOM by writing rules that affect gradually
      less and less of it.
    </p>
    <p>
      These guidelines are easier said than followed. To achieve this in a
      consistent way, Harry Roberts created the ITCSS, a CSS architecture in
      seven layers.
    </p>
    <img src="/images/ITCSS.png" alt="ITCSS diagram" class="image" />
    <h2 class="title">ITCSS layers</h2>
    <p>
      In ITCSS, each layer is a logical progression from the last. It increases
      in specificity, it gets more explicit and intentioned, and it narrows the
      reach of the selectors used. This means our CSS is inherently easier to
      scale, as we're writing it in an order that only ever adds to what was
      written previously. We don't waste time undoing or overriding overly
      opinionated CSS that was written earlier on.
    </p>
    <p>
      It also means that every thing, and every type of thing, has its own
      consistent, predictable place to live. This makes both finding and adding
      styles much simpler, which is particularly useful when you have a number
      of developers contributing to the codebase.
    </p>
    <h3>Settings</h3>
    <p>
      Layer used with pre-processors and contain font, breakpoints, colors
      definitions, etc. It’s important not to output any CSS in this layer.
    </p>
    <h3>Tools</h3>
    <p>
      Layer used for mixins and functions. It’s important not to output any CSS
      in this layer.
    </p>
    <h3>Generic</h3>
    <p>
      Layer used to reset and/or normalize styles, box-sizing definition, etc.
      This is the first layer which generates actual CSS.
    </p>
    <h3>Elements</h3>
    <p>
      Layer used for styling for bare HTML elements (like H1, A, etc.). These
      come with default styling from the browser so we can redefine them here.
    </p>
    <h3>Objects</h3>
    <p>
      Layer used for class-based selectors which define undecorated design
      patterns, for example media object known from OOCSS. Useful for things
      like containers and grids.
    </p>
    <h3>Components</h3>
    <p>
      Layer used for specific UI components. This is where the majority of our
      work takes place and our UI components are often composed of Objects and
      Components. We keep all our components within its own directory, and its
      styles should live in that directory as well.
    </p>
    <h3>Trumps / Utilities</h3>
    <p>
      Layer for utilities and helper classes with ability to override anything
      which goes before in the triangle, eg. hide helper class. This layer
      shouldn't be used unless something awful happens.
    </p>
    <img
      src="/images/ITCSS reach and specificity.png"
      alt="Reach and specificity diagram with ITCSS"
      class="image"
    />
    <back-to-index-link />
  </article>
</template>

<script>
import BackToIndexLink from '~/components/BackToIndexLink.vue'

export default {
  components: {
    BackToIndexLink,
  },
}
</script>
