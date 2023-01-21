# Hello World

# Why am I doing this?

The goal of this diary is to record and document the lessons that I have learnt through my projects. Admittedly, I haven’t been able to do this well, which sort of made job hunting much harder than it needs to be ¯\*( ͡❛ ͜ʖ ͡❛)*/¯. To future me, read this if you can’t be arsed to continue the diary, you don’t want to be back to the perpetual loop of job application. Ahh, the pain.

# “Hello World” project

To kick things off, let’s start with a personal website project. Something simple, with room to improve on and stuff to add on in the future. This should be a good opportunity to learn React as well.

# Tools used

1. React
2. Material UI
3. Github Pages

# Preliminary features

1. I want to be able to create places to place bits and pieces of writing like this, so that I can look back at it in the future
2. I want to have multiple categories for different pieces of writing that I will be producing.
3. (Not too sure) I want to have a page outlining who I am, as well as my experiences, similar to LinkedIn, so that it could be a customizable template for my resume.

# Design Decisions

## The use of Material UI

To simplify the process of building the UI and avoid having to deal with fine tuning CSS at this point of the project, a lot of the UI components was reused from the Material UI framework.

## Content Loading using JSON

Since Gthub Pages only support the use of static webpages, content will be loaded from .md files with the content metadata saved in a JSON file. This removes the need of a database. If more content is introduced in the future, a migration from Github Pages may be necessary,

# Overall Look and Feel

## Components

1. Navigation Bar
    1. This is to enable us to navigate between different pages.
    2. This should be fixed, regardless of the page that we have navigated to, so that we always have a method of navigation
2. List of posts
3. Expanded posts
    1. 10% category, 80% content, 10% metadata

# Design Patterns

Design patterns seemed to be a good idea at first, but considering the scale of the project and its complexity, I will just refactor this in the future. I hope that I won’t regret this. :-).

# Future TODOs

1. Set up a Jira/Confluence site for docs, as well as future features.
2. Create a section for post metadata and information to be displayed
3. A better way for organising post categories.
4. Build and design a proper home page
5. Build and design an about page with link to my resume available to be downloaded.