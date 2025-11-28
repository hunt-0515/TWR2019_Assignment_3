---
title: Syntax reference
sidebar_label: Markdown Syntax
sidebar_position: 2
---

# Markdown syntax

## Basic formatting

 ### Headings

- Level 1 headings: `#`
- Level 2 headings: `##`
- Level 3 headings: `###`

 ### Text formatting

- **Bold text**:	 `**Bold text**`
- *Italicized text*: 	`*Italicized text*`
- Block quotes: `> Block quote`

 ### Lists

- Ordered list: ` 1. Numbered list item`
- Unordered list: ` - Bullet list item`
- Task list: ` - [ ] Incomplete task` *or* ` - [x] Completed task`

 ### Links

- Internal link: `[[/path/to/link.md]]`  \*
- Embedded image or file link: `![/path/to/image.jpg]`  \*
- Web link / hyperlink: `[link text](https://www.example.com/home)`


\* *not available in all markdown viewers*

## Advanced formatting

### Lists

```markdown
| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
|  Item 1  |  Item 2  |  Item 3  |
```

This renders as:  

| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
|  Item 1  |  Item 2  |  Item 3  |

### Code blocks

Use triple backticks ( \`\`\` ) to start and end code blocks.

### Advanced text formatting

- Strikethrough: `~~struckout text~~` renders as ~~struckout text~~
- Highlights: `==highlighted text==` \*
- Footnotes: `[^1]` is a reference to a footnote, `[^1]: example` renders the footnote contents \*

\* *not available in all markdown viewers*