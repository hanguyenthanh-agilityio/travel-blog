# Astro Travel Blog: Basics

## 🚀 Author

- Ha Nguyen THanh

## 🚀 Overview

- This document provides information about Astro practice.

## 🚀 Team size

- 1 Dev

## 🚀 Technical stack

- [Astro](https://astro.build/): main framework for static side generation

- [ShadCN UI](https://ui.shadcn.com/): UI component library

- [Storybook](https://storybook.js.org/): preview & document component

- [Unit test](https://testing-library.com/)

## 🚀 Development environment

- Cursor (text editor)

## 🚀 Target

- Understand and apply Astro:
  - Core concepts:
    - Understand file-based routing, frontmatter
    - Differentiate when to use .astro or .tsx
    - Apply partial hydration to optimize js
    - Manage assets and public to optimize image, favicons, fonts

  - Features:
    - Build reusable layouts
    - Render content with Markdown & MDX , content collection
    - Apply data fetching from APIs
    - Apply Server-side rendering
  - Integrations

- Use TailwindCSS + ShadCN UI

- Apply lazy-loading & code splitting

## 🚀 Design

- [Travel Blog](https://www.figma.com/design/edaPl6OVYhrDRViUGnLZxN/Free-Blog-Template-%7C-4-Theme-Blog-With-Complete-UI--Community-?node-id=28-4284&t=QgNlooDel7xt7StX-0)

- Theme:

| CATEGORY             | NAME                                                                                                     | VALUE                                                                                              |
| -------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| **Breakpoint**       | • sm<br>• md<br>• lg<br>• xl<br>• 2xl                                                                    | • 640px (mobile)<br>• 768px (tablet)<br>• 1024px (Desktop)<br>• 1280px (Large Desktop)<br>• 1536px |
| **Typography**       | • Base font<br>• text - base<br>• text - sm<br>• text - md<br>• text - lg<br>• text - xl<br>• text - 2xl | • Poppins<br>• 16px<br>• 14px<br>• 18px<br>• 20px<br>• 24px<br>• 32px                              |
| **Color**            | • primary<br>• accent<br>• muted<br>• background<br>• card background                                    | • #212121<br>• #2980B9<br>• #757575<br>• #ffffff<br>• Gradient                                     |
| **Spacing & Radius** | • rounded - md<br>• rounded - lg                                                                         | • 12px<br>• 24px                                                                                   |

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                                                                   | Action                                       |
| :------------------------------------------------------------------------ | :------------------------------------------- |
| `git clone git@gitlab.asoft-python.com:ha.nguyenthanh/astro-training.git` | Create a copy of the target repository       |
| `cd feature/travel-blog`                                                  | Change directory to travel-blog              |
| `pnpm install`                                                            | Installs dependencies                        |
| `pnpm dev`                                                                | Starts local dev server at `localhost:4321`  |
| `pnpm build`                                                              | Build your production site to `./dist/`      |
| `pnpm preview`                                                            | Preview your build locally, before deploying |
