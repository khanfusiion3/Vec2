class Vec2 {
  constructor(x, y) {
    this.set(x, y);
  }
  set(x = 0, y = 0) {
    if (typeof x.x === 'number') {
      this.x = x.x;
      this.y = x.y;
    } else {
      this.x = x;
      this.y = y;
    }
    return this;
  }
  negi() {
    return this.neg(this);
  }
  neg(out = new Vec2()) {
    out.x = -this.x;
    out.y = -this.y;
    return out;
  }
  muli(s) {
    return this.mul(s, this);
  }
  mul(s, out = new Vec2()) {
    if (typeof s.x !== 'number') {
      out.x = s * this.x;
      out.y = s * this.y;
    } else {
      out.x = s.x * this.x;
      out.y = s.y * this.y;
    }
    return out;
  }
  divi(s) {
    return this.div(s, this);
  }
  div(s, out = new Vec2()) {
    if (typeof s.x !== 'number') {
      out.x = this.x / s;
      out.y = this.y / s;
    } else {
      out.x = this.x / s.x;
      out.y = this.y / s.y;
    }
    return out;
  }
  addi(s) {
    return this.add(s, this);
  }
  add(s, out = new Vec2()) {
    if (typeof s.x !== 'number') {
      out.x = this.x + s;
      out.y = this.y + s;
    } else {
      out.x = this.x + s.x;
      out.y = this.y + s.y;
    }
    return this;
  }
  addsi(v, s) {
    return this.adds(v, s, this);
  }
  adds(v, s, out = new Vec2()) {
    out.x = this.x + v.x * s;
    out.y = this.y + v.y * s;
    return out;
  }
  subi(v) {
    return this.sub(v, this);
  }
  sub(v, out = new Vec2()) {
    if (typeof v.x !== 'number') {
      out.x = this.x - v;
      out.y = this.y - v;
    } else {
      out.x = this.x - v.x;
      out.y = this.y - v.y;
    }
    return out;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  rotate(radians) {
    const c = Math.cos(radians);
    const s = Math.sin(radians);
    this.x = this.x * c - this.y * s;
    this.y = this.x * s + this.y * c;
    return this;
  }
  normalize() {
    const lenSq = this.lengthSq();
    if (lenSq > ImpulseMath.EPSILON_SQ) {
      const invLen = 1 / Math.sqrt(lenSq);
      this.x *= invLen;
      this.y *= invLen;
    }
    return this;
  }
  mini(a, b) {
    return this.min(a, b, this);
  }
  maxi(a, b) {
    return this.max(a, b, this);
  }
  min(a, b, out = new Vec2()) {
    out.x = Math.min(a.x, b.x);
    out.y = Math.min(a.y, b.y);
    return out;
  }
  max(a, b, out = new Vec2()) {
    out.x = Math.max(a.x, b.x);
    out.y = Math.max(a.y, b.y);
    return out;
  }
  dot(v) {
    return this.x * v.x + this.y * v.y;
  }
  distanceSq(v) {
    const dx = this.x - v.x;
    const dy = this.y - v.y;
    return dx * dx + dy * dy;
  }
  distance(v) {
    const dx = this.x - v.x;
    const dy = this.y - v.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
  crossVS(v, a) {
    this.x = v.y * a;
    this.y = v.x * -a;
    return this;
  }
  crossSV(a, v) {
    this.x = v.y * -a;
    this.y = v.x * a;
    return this;
  }
  crossV(v) {
    return this.x * v.y - this.y * v.x;
  }
  static arrayOf(length) {
    const array = new Array(length);
    while (--length >= 0) {
      array[length] = new Vec2();
    }
    return array;
  }
}
