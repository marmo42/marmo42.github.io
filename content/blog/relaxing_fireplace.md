---
title: Relaxing Fireplace
author: StylexTV
description: Learn how to use @nuxt/content.
---
# Relaxing Fireplace

Until now, trying to style an article, document, or blog post with Tailwind has been a tedious task that required a keen eye for typography and a lot of complex custom CSS.

By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you really are just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive.

We get lots of complaints about it actually, with people regularly asking us things like:

> Why is Tailwind removing the default styles on my h1 elements? How do I disable this? What do you mean I lose all the other base styles too?

We hear you, but we're not convinced that simply disabling our base styles is what you really want. You don't want to have to remove annoying margins every time you use a p element in a piece of your dashboard UI. And I doubt you really want your blog posts to use the user-agent styles either — you want them to look awesome, not awful.

The @tailwindcss/typography plugin is our attempt to give you what you actually want, without any of the downsides of doing something stupid like disabling our base styles.

It adds a new prose class that you can slap on any block of vanilla HTML content and turn it into a beautiful, well-formatted document:

## Blockquotes

> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
>>> ...or with spaces between arrows.

> Dorothy followed her through many of the beautiful rooms in her castle.

## Code

Inline `code`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

Block code "fences"

```
Sample text here...
```

Syntax highlighting

``` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)

## Emphasis
You can add emphasis by making text bold or italic.

I just love **bold text**.
Italicized text is the *cat's meow*.
This text is ***really important***.

## Lists

Unordered

- Create a list by starting a line with `+`, `-`, or `*`
- Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    - Ac tristique libero volutpat at
    - Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
- Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar