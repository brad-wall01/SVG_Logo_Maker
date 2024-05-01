const Logo = require(`./shapes`);

describe(`Circle`, () => {
    it(`should render a circle`, () => {
        const shape = new Circle();
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" />`);
    });
});

describe(`Square`, () => {
    it(`should rendera square`, () => {
        const shape = new Square();
        expect(shape.render()).toEqual(`<rect x="50" y="50" width="200" height="100" />`);
    });
});

describe(`Triangle`, () => {
    it(`should render a triangle`, () => {
        const shape = new Triangle();
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" />`);
    });
});
