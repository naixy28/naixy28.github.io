---
layout: article
title: Cheat Sheets
excerpt: Cheat Sheets （多图杀猫！！）
category: tech
tags: javascript css
---

# Cheat Sheets

## CSS Blend Mode
![blend mode](/assets/img/blendmode-19.jpg)

## Redux
![redux](/assets/img/redux.jpg)

## React
![react](/assets/img/react-lifecycle.png)

## SASS
> [引用自这里](https://gist.github.com/hofmannsven/b219051467f86f2ac469)

```
// SCSS comments (not visible in CSS)
/* CSS comments (visible in CSS) */


// Variables
$color: black;

p {
  color: $color;
}


// Nesting & Abbreviation
aside {
  border: {
    width: 1px;
    style: solid;
    color: $color;
  }
}

nav {
  background: none;
  ul {
    list-style-type: none;
    a {
      color: $color;
      &:hover, &:focus, &:active { // Skip default space: `a:hover` instead of `a :hover`
        color: red;
      }
    }
  }
  body.blog & { // Skip default nesting: `body.blog nav` instead of `nav body.blog`
    background: green;
  }
}

// Extend/Inheritance
.infobox {
  border: 1px solid #ccc;
  padding: 10px;
  color: $color;
}

.success {
  @extend .infobox;
  border-color: green;
}

// The % prefix creates rules that never get used on their own.
// Theses classes are solely for the purpose of extending.
%info {
  position: absolute;
}

.notice {
  @extend %info;
}


// Mixins
@mixin outline {
  border: 1px solid black;
}
@mixin animate( $property, $duration, $easing ) {
  transition: $property $duration $easing;
}
@mixin default_animate( $property: all, $duration: 1s, $easing: ease ) { // Mixin with defaults
  transition: $property $duration $easing;
}

aside {
  border-radius: 10px;
  @include outline;
}

a {
  @include animate( all, 1s, linear );
}
nav a {
  @include default_animate( $duration: 3s ); // Use defaults with custom $duration
}


// Operators: +, -, *, /, and %
.container {
  width: 600px / 960px * 100%;
}


// Functions
$highlight: green;

p {
  color: lighten( $highlight, 20% );
}
p {
  color: darken( $highlight, 10% );
}
p {
  color: fade-out( $highlight, 0.5 );
}
p {
  color: adjust-hue( $highlight, 90 ); // Usually between -360 degrees and 360 degrees.
}
p {
  color: red + blue; // Compiles to magenta.
}

// Loops
$list: (orange, purple, teal);
@each $item in $list {
  .#{$item} {
    background: $item;
  }
}

$total: 10;
$step: 360deg / $total;
@for $i from 1 through $total {
   .ray:nth-child(#{$i}){
      background: adjust-hue( blue, $i * $step );
   }
}

// If/Else
p {
  margin-left: if( $i % 2 == 0, 0px, 50px );
}


// Import/Embed (.scss files only)
@import 'normalize' // Prevent separate compiling with a leading underscore: `_normalize.scss`
```

## Emmet
![emmet](/assets/img/emmet-api.jpg)
