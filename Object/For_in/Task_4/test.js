describe("miltiplyNumeric", function(){
    it("multiplies all numeric properties by 2", function(){
        let menu = {
        width: 200,
        heigth: 300,
        title: "My menu",
        };
        let result = multiplyNumeric(menu);
        assert.equal(menu.width, 400);
        assert.equal(menu.heigth, 600);
        assert.equal(menu.title, "My menu");
    });

    it("returns nothing", function(){
        assert.isUndefined(multiplyNumeric({}));
    });
})