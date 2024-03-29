# OTB Test

A web page displaying three hotel booking products, with sort and expandable detail functionality.

## Install & preview

1. Clone the repo
2. Run `npm install`
3. Preview with `npm run preview`

Run the test suite with `npx vitest --reporter=verbose` 💥

## Details

As I would do any new project, I've gone for a **functionality first** approach.

### Testing & markup

- TDD - Write a test and watch it fail, build a component to pass the test. Refactor and repeat.
- Semantic HTML - using React Testing Library I am encouraged to write accessible HTML markup, rather than a concoction of `div`’s

I get close to completing the acceptance criteria with only markup.

### Styling & CSS

Using Tailwind CSS enabled quick styling, however I could have used a more robust solution like CSS modules or CSS-in-JS. The tests provided confidence that any breaking changes will be noticed.

### Acceptance criteria

- ✅ Sort the results by price (this should be the default)
- ✅ Sort the results by star rating and highlight when active
- ✅ Sort the results alphabetically by hotel name and highlight when active
- ✅ Ability to toggle expanded hotel description

### Screenshots

<img width="860" alt="Screenshot 1" src="https://github.com/tom-ai/otb-test/assets/34452971/2e9b61e4-f95a-443c-8f37-7f86093f947c">
<img width="860" alt="Screenshot 2" src="https://github.com/tom-ai/otb-test/assets/34452971/64ecde1f-a0db-4e20-8633-b4a1d267d225">

