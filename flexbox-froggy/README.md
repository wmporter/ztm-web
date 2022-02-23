### [Flexbox Froggy](https://flexboxfroggy.com/)

1. Make frog line up on right side
```css
justify-content: flex-end;
```

2. Make frogs line up in center
```css
justify-content: center;
```

3. Make frogs line up with equal spacing on left and right of each
```css
justify-content: space-around;
```

4. Make frogs line up with equal spacing between them
```css
justify-content: space-between;
```

5. Keep frogs lined up but aligned with the bottom
```css
align-items: flex-end;
```

6. Make frog line up in center vertically and horizontally
```css
align-items: center;
justify-content: center;
```

7. Make frogs line up with equal spacing on sides, aligned with bottom
```css
align-items: flex-end;
justify-content: space-around;
```

8. Make frogs line up in reverse order
```css
flex-direction: row-reverse;
```

9. Make frogs line up in a column instead of row
```css
flex-direction: column;
```

10. Make frogs line up in reverse order but aligned with left side
```css
flex-direction: row-reverse;
justify-content: flex-end;
```

11. Make frogs line up in a column and align with the bottom
```css
flex-direction: column;
justify-content: flex-end;
```

12. Make frogs line up in a column, in reverse order, and with equal spacing
```css
flex-direction: column-reverse;
justify-content: space-between;
```

13. Make frogs line up in a centered row, in reverse order, and along the bottom
```css
flex-direction: row-reverse;
justify-content: center;
align-items: flex-end;
```

14. Make yellow frog come later in the order to be all the way at end
```css
order: 1
```

15. Make red frog come earlier in the order to be all the way at beginning
```css
order: -1
```

16. Make yellow frog align with the bottom
```css
align-self: flex-end;
```

17. Make yellow frogs come later in order and align with bottom
```css
order: 1;
align-self: flex-end;
```

18. Make frogs wrap to next row
```css
flex-wrap: wrap;
```

19. Make frogs wrap to next column
```css
flex-direction: column;
flex-wrap: wrap;
```

20. Make frogs wrap to next column using flex-flow
```css
flex-flow: column wrap;
```

21. Make wrapped frog lines lined up at the top
```css
align-content: flex-start;
```

22. Make wrapped frog lines lined up at the bottom
```css
align-content: flex-end;
```

23. Make frogs lined up in columns, centered horizontally, with reds on the bottom
```css
flex-direction: column-reverse;
align-content: center;
```

24. Make frogs lined up in columns, in reverse order, centered vertically, aligned with right, wrapped to all the way to left
```css
flex-flow: column-reverse wrap-reverse;
justify-content: center;
align-content: space-between;
```

