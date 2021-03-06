describe("A space invaders bullet", function() {
  var bullet;
  var velocity;
  var x;
  var y;

  beforeEach(function() {
    velocity = Math.random();
    x = Math.random();
    y = Math.random();

    bullet = new InvaderBullet();
    bullet.shoot(velocity, x, y);
  });

  describe("when it is created", function() {
    it("should be on the Invaders team", function() {
      expect(bullet.team).toEqual(Team.Invaders);
    });

    it("should specify the invader bullet image", function() {
      expect(bullet.image).toEqual("invader_bullet");
    });
  });

  describe("collisions", function() {

    beforeEach(function() {
      bullet.shoot(0, 0, 0);
    });

    it("should not collide with invaders", function() {
      bullet.collide(new Invader());
      expect(bullet.active).toBeTruthy();
    });

    it("should collide with the tank", function() {
      bullet.collide(new Tank());
      expect(bullet.active).toBeFalsy();
    });
  });
});
