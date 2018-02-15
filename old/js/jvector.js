/*
  JVector
  add: JVector同士の足し算
  sub: JVector同士の足し算
  normalize: JVectorの正規化
  mult: JVectorのスカラー倍
  div: JVectorのスカラーの割り算
*/

var JVector = function(x, y){
 this.x= x;
 this.y= y;
}

// 足し算
JVector.prototype.add = function(jvector){
  this.x = this.x + jvector.x;
  this.y = this.y + jvector.y;
}

// 引き算
JVector.prototype.sub = function(jvector){
  this.x = this.x - jvector.x;
  this.y = this.y - jvector.y;
}

// 正規化（スカラーを1にする）
JVector.prototype.normalize = function(scalar){
  var currentScalar = Math.sqrt(this.x * this.x + this.y * this.y);
  this.x = this.x / currentScalar;
  this.y = this.y / currentScalar;
}


// スカラーを掛ける
JVector.prototype.mult = function(scalar){
  this.x = this.x * scalar;
  this.y = this.y * scalar;
}

// スカラーで割る
JVector.prototype.div = function(scalar){
  if(scalar != 0) {
    this.x = this.x / scalar;
    this.y = this.y / scalar;
  }
  else {
    console.log("argument is 0.");
  }
}

JVector.prototype.limit = function(max){
  var currentScalar = Math.sqrt(this.x * this.x + this.y * this.y);
  this.x = this.x * max/ currentScalar;
  this.y = this.y * max/ currentScalar;
}

JVector.prototype.scalar = function(){
    return Math.sqrt((this.x * this.x) + (this.y * this.y))
}