let hero;

function getHero() {
    // return "Thor"
    return false
}

hero = getHero()
console.log(hero)


let heros:string;

function getHeros() {
    return "Thor"
}

heros = getHeros()
console.log(hero)

// When you don't specify a type , and TypeScript can't infer it from context , the compiler will typically default to any
// You usually want to avoid this though , because  any isn't type-checked . Use the compiler flag noImplicitAny to flag any implicit any as an error
