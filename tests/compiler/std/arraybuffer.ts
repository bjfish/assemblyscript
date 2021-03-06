import "allocator/arena";

var buffer = new ArrayBuffer(8);

assert(buffer.byteLength == 8);

var sliced = buffer.slice();

assert(sliced.byteLength == 8);
assert(sliced !== buffer);

sliced = buffer.slice(1);

assert(sliced.byteLength == 7);

sliced = buffer.slice(-1);

assert(sliced.byteLength == 1);

sliced = buffer.slice(1, 3);

assert(sliced.byteLength == 2);

sliced = buffer.slice(1, -1);

assert(sliced.byteLength == 6);

sliced = buffer.slice(-3, -1);

assert(sliced.byteLength == 2);

sliced = buffer.slice(-4, 42);

assert(sliced.byteLength == 4);

sliced = buffer.slice(42);

assert(sliced.byteLength == 0);
assert(sliced != null);
