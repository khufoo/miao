let khufoo = function () {



  /** `Object#toString` result references. */
  let arrayTag = '[object Array]',
    functionTag = "[object Function]",
    objectTag = "[object Object]",
    booleanTag = "[object Boolean]",
    stringTag = "[object String]",
    argumentsTag = "[object Arguments]"



  /*---@category Lang-----------------------------------------*/

  /**
   * 判断value是否像对象一样
  * Checks if `value` is object-like. A value is object-like if it's not `null`
  * and has a `typeof` result of "object".
  *
  * @static
  * @memberOf _
  * @since 4.0.0
  * @category Lang
  * @param {*} value The value to check.
  * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
  * @example
  *
  * khufoo.isObjectLike({});
  * // => true
  *
  * khufoo.isObjectLike([1, 2, 3]);
  * // => true
  *
  * khufoo.isObjectLike(khufoo.noop);
  * // => false
  *
  * khufoo.isObjectLike(null);
  * // => false
  */
  function isObjectLike(value) {
    return value !== null && typeof value === 'object'
  }

  /**
   * The base基本 implementation实现 of `getTag` without没有 fallbacks回退 for针对 buggy错误 environments环境.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    let isOwn = Object.prototype.call(value, sumToStringTag)
    let tag = value[symToStringTag]

    try {
      value[symToStringTag] = undefined
      let unmasked = true
    } catch (e) { }

    let result = nativeObjectTostring.call(value)
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag
      } else {
        delete value[symToStringTag]
      }
    }
    return result
  }

  /**
   * Checks if `value` is classified as a `Number` primitive or object.
   *
   * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
   * classified as numbers, use the `_.isFinite` method.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a number, else `false`.
   * @example
   *
   * _.isNumber(3);
   * // => true
   *
   * _.isNumber(Number.MIN_VALUE);
   * // => true
   *
   * _.isNumber(Infinity);
   * // => true
   *
   * _.isNumber('3');
   * // => false
   */
  function isNumber(value) {
    if (Object.prototype.toString.call(value) === "[object Number]") {
      return true
    } else {
      return false
    }
  }

  /**
 * Checks检查 if `value` is `NaN`.
 *
 * **Note:** This method is based on
 * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
 * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
 * `undefined` and other non-number values.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 * @example
 *
 * khufoo.isNaN(NaN);
 * // => true
 *
 * khufoo.isNaN(new Number(NaN));
 * // => true
 *
 * isNaN(undefined);
 * // => true
 *
 * khufoo.isNaN(undefined);
 * // => false
 */
  function isNaN(value) {
    return isNumber(value) && value != +value
  }

  /**
   * Checks if `value` is `null`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
   * @example
   *
   * _.isNull(null);
   * // => true
   *
   * _.isNull(void 0);
   * // => false
   */
  function isNull(value) {
    return value === null
  }

  /**
   * Checks if `value` is `undefined`.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
   * @example
   *
   * _.isUndefined(void 0);
   * // => true
   *
   * _.isUndefined(null);
   * // => false
   */
  function isUndefined(value) {
    return value === undefined
  }

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * khufoo.isFunction(_);
   * // => true
   *
   * khufoo.isFunction(/abc/);
   * // => false
   */
  function isFunction(value) {
    return Object.prototype.toString.call(value) === functionTag
  }

  /**
   * Checks if `value` is classified as a boolean primitive or object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
   * @example
   *
   * _.isBoolean(false);
   * // => true
   *
   * _.isBoolean(null);
   * // => false
   */
  function isBoolean(value) {
    return Object.prototype.toString.call(value) === booleanTag
  }

  /**
   * Checks if `value` is classified as a `String` primitive or object.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a string, else `false`.
   * @example
   *
   * _.isString('abc');
   * // => true
   *
   * _.isString(1);
   * // => false
   */
  function isString(value) {
    return Object.prototype.toString.call(value) === stringTag
  }

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    let type = typeof value
    return value != null && (type === 'object' || type === 'function')
  }

  /**
   * Checks if `value` is classified as a `Set` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   * @example
   *
   * _.isSet(new Set);
   * // => true
   *
   * _.isSet(new WeakSet);
   * // => false
   */
  function isSet(value) {
    return value instanceof Set
  }

  /**
   * Checks检查 if `value` is classified归类 as为 a `WeakSet` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
   * @example
   *
   * _.isWeakSet(new WeakSet);
   * // => true
   *
   * _.isWeakSet(new Set);
   * // => false
   */
  function isWeakSet(value) {
    return value instanceof WeakSet
  }

  /**
   * The base基本 implementation实现 of `_.unary一元的` without support支持 for storing存储 metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function (value) {
      return func(value);
    };
  }

  /**
   * Checks if `value` is classified as a `Map` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   * @example
   *
   * _.isMap(new Map);
   * // => true
   *
   * _.isMap(new WeakMap);
   * // => false
   */
  function isMap(value) {
    return value instanceof Map
  }

  /**
 * Checks if `value` is classified as a `WeakSet` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
 * @example
 *
 * _.isWeakSet(new WeakSet);
 * // => true
 *
 * _.isWeakSet(new Set);
 * // => false
 */
  function isWeakMap(value) {
    return value instanceof WeakMap
  }

  /**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 */
  function isNil(value) {
    return value == null
  }


  /**
   * Checks检查 if `value` is classified归类 as a `RegExp` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
   * @example
   *
   * _.isRegExp(/abc/);
   * // => true
   *
   * _.isRegExp('/abc/');
   * // => false
   */
  function isRegExp(value) {
    return value instanceof RegExp
  }

  /**
   * Checks检查 if `value` is classified归类 as a `Symbol` primitive原始的 or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol(value) {
    return typeof value === 'symbol'
  }

  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  function isArguments(value) {
    return Object.prototype.toString.call(value) === argumentsTag
  }

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */
  function isArray(value) {
    return Object.prototype.toString.call(value) === arrayTag
  }

  /**
   * Checks if `value` is classified as an `ArrayBuffer` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
   * @example
   *
   * _.isArrayBuffer(new ArrayBuffer(2));
   * // => true
   *
   * _.isArrayBuffer(new Array(2));
   * // => false
   */
  function isArrayBuffer(value) {
    return value instanceof ArrayBuffer

  }

  /**
   * Checks if `value` is classified as a `Date` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
   * @example
   *
   * _.isDate(new Date);
   * // => true
   *
   * _.isDate('Mon April 23 2012');
   * // => false
   */
  function isDate(value) {
    return value instanceof Date
  }

  /**
   * Checks检查 if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than小于 or equal等于 to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */
  function isArrayLike(value) {
    if (value &&
      typeof value === 'object' &&
      isFinite(value.length) &&
      value.length >= 0 &&
      value.length < 2 ** 32 &&
      value.length === Math.floor(value.length)
    ) {
      return true
    }
    return false
  }

  /**
   * Checks检查 if如果 `value` is a plain普通的 object, that is, an object created创建 by the
   * `Object` constructor构造 or one with a `[[Prototype]]` of `null`.
   * 如果是字面量或者new Object创建的对象返回true
   * @static
   * @memberOf _
   * @since 0.8.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   * }
   *
   * _.isPlainObject(new Foo);
   * // => false
   *
   * _.isPlainObject([1, 2, 3]);
   * // => false
   *
   * _.isPlainObject({ 'x': 0, 'y': 0 });
   * // => true
   *
   * _.isPlainObject(Object.create(null));
   * // => true
   */
  // function isPlainObject(obj) {
  //   if (!obj || type(obj) !== 'object' || isWindow(obj) || obj.nodeType) {
  //     return false;
  //   }
  //   var key;
  //   for (key in obj) { }
  //   return key === undefined || hasOwn.call(obj, key)
  // }

  /**
   * Checks if `value` is likely a DOM element.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
   * @example
   *
   * _.isElement(document.body);
   * // => true
   *
   * _.isElement('<body>');
   * // => false
   */
  function isElement(value) {

  }

  /**
   * Converts转换 `value` to a number.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   * @example
   *
   * _.toNumber(3.2);
   * // => 3.2
   *
   * _.toNumber(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toNumber(Infinity);
   * // => Infinity
   *
   * _.toNumber('3.2');
   * // => 3.2
   */
  function toNumber(value) {
    if (isNumber(value)) {
      return value
    }
    if (isSymbol(value)) {
      return NaN
    }
    if (isObject(value)) {
      var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
      value = isObject(other) ? (other + '') : other;
    }
  }

  /**
   * Performs a deep comparison between two values to determine if they are
   * equivalent.
   *
   * **Note:** This method supports comparing arrays, array buffers, booleans,
   * date objects, error objects, maps, numbers, `Object` objects, regexes,
   * sets, strings, symbols, and typed arrays. `Object` objects are compared
   * by their own, not inherited, enumerable properties. Functions and DOM
   * nodes are compared by strict equality, i.e. `===`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.isEqual(object, other);
   * // => true
   *
   * object === other;
   * // => false
   */
  function isEqual(value, other) {

  }











  /*--Array------------------------------------------------------*/

  /**
   * Creates an array of elements split拆分 into成 groups组 the length of `size`.
   * If `array` can't be split evenly, the final最后 chunk块 will将 be the remaining剩余
   * elements.
   * 创建一个数组 将数组拆分成新数组 新数组的长度为size
   * 如果array 不能拆分成任何东西, 最后的块长度将会是剩余的元素
   *
   * @category Array
   * @param {Array} array The array to process处理.
   * @param {number} [size=1] The length of each每 chunk
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {Array} Returns the new array of chunks.
   * @example
   *
   * khufoo.chunk(['a', 'b', 'c', 'd'], 2);
   * // => [['a', 'b'], ['c', 'd']]
   *
   * khufoo.chunk(['a', 'b', 'c', 'd'], 3);
   * // => [['a', 'b', 'c'], ['d']]
   * 
   */

  function chunk(array, size) {
    let leng = array.length
    let arr = []
    var k = 0
    for (let i = 0; i < Math.ceil(leng / size); i++) {
      let arr2 = []
      for (let j = 0; j < size; j++) {
        arr2[j] = array[k]
        k++
        if (k === array.length) {
          break
        }
      }
      arr[i] = arr2
    }
    return arr
  }

  /**
   * Creates an array with all falsey values removed. The values `false`, `null`,
   * 创建一个新数组 同时所有的falsey的属性都值移除 例如: value是false null 0 "" 
   * undefined nan 都是falsey
   * 
   * `0`, `""`, `undefined`, and `NaN` are falsey.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to compact.
   * @returns {Array} Returns the new array of filtered values.
   * @example
   *
   * khufoo.compact([0, 1, false, 2, '', 3]);
   * // => [1, 2, 3]
   */

  function compact(array) {
    var arr = []
    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        arr.push(array[i])
      }
    }
    return arr
  }

  /**
   * Creates a new array concatenating `array` with any additional arrays
   * 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
   * and/or values.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {Array} array The array to concatenate.
   * @param {...*} [values] The values to concatenate.
   * @returns {Array} Returns the new concatenated array.
   * @example
   *
   * var array = [1];
   * var other = khufoo.concat(array, 2, [3], [[4]]);
   *
   * console.log(other);
   * // => [1, 2, 3, [4]]
   *
   * console.log(array);
   * // => [1]
   */
  function concat(array, ...values) {
    for (let i = 0; i < values.length; i++) {
      array = array.concat(values[i])
    }
    return array
  }

  /**
   * Creates an array of `array` values not included in the other given arrays
   * 创建一个数组 array 数组的值不能包括特定的数组
   * 
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons. The order and references of result values are
   * determined by the first array.
   *
   * **Note:** Unlike `_.pullAll`, this method returns a new array.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @param {...Array} [values] The values to exclude.
   * @returns {Array} Returns the new array of filtered values.
   * @see khufoo.without, khufoo.xor
   * @example
   *
   * khufoo.difference([2, 1], [2, 3]);
   * // => [1]
   
   ------------------------------------------
     输入：difference([2,1],[2,3]) 
     输出/
     期望：[1] 
     -----------------------------------------
     输入：difference([2,1],[2,3]) 
     输出/
     期望：[1] 
     -----------------------------------------
     输入：difference([1,2,3,4],[2,3,4,5]) 
     输出/
     期望：[1] 
     -----------------------------------------
     输入：difference([1,2,3,4],[1,3],[4]) 
     输出：[2,4] 
     期望：[2] 
     -----------------------------------------
     输入：difference([1,2,3,4,5,6,7,8],[1,3],[4,8],[6]) 
     输出：[2,4,5,6,7,8] 
     期望：[2,5,7]
   */
  function difference(array, values, ...arrays) {
    let arr = []
    let arrsum = concat(values, ...arrays)
    for (let i = 0; i < (array.length || 0); i++) {
      let juage = 1
      for (let j = 0; j < (arrsum.length || 0); j++) {
        if (array[i] == arrsum[j]) {
          juage = 0
          break
        }
      }
      if (juage === 1) {
        arr.push(array[i])
      }
    }
    return arr
  }

  /**
   * This method is like `_.difference` except that it accepts `iteratee` which
   * is invoked for each element of `array` and `values` to generate the criterion
   * by which they're compared. The order and references of result values are
   * determined by the first array. The iteratee is invoked with one argument:
   * (value).
   * 创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。（愚人码头注：即创建一个新数组，这个数组中的值，为第一个数字（array 参数）排除了给定数组中的值。）该方法使用 SameValueZero做相等比较。结果值的顺序是由第一个数组中的顺序确定。 
   *
   * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @param {...Array} [values] The values to exclude.
   * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
   * @returns {Array} Returns the new array of filtered values.
   * @example
   *
   * khufoo.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
   * // => [1.2]
   *
   * // The `_.property` iteratee shorthand.
   * khufoo.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
   * // => [{ 'x': 2 }]
   * 
    输入：differenceBy([2.1,1.2],[2.3,3.4],"function floor() { [native code] }") 
    输出： 
    期望：[1.2] 
    =================
    输入：differenceBy([{"x":2},{"x":1}],[{"x":1}],"x") 
    输出： 
    期望：[{"x":2}] 
   */
  function differenceBy(array, values, iteratee) {
    let arr = []
    for (let i = 0; i < array.length; i++) {
      let judge = 1
      for (let j = 0; j < values.length; j++) {
        if (isFunction(iteratee)) {
          if (iteratee(array[i]) === iteratee(values[j])) {
            judge = 0
            break
          }
        } else {
          if (array[i][iteratee] === values[j][iteratee]) {
            judge = 0
            break
          }
        }
      }
      if (judge === 1) {
        arr.push(array[i])
      }
    }
    return arr
  }

  /**
   * Creates a slice of `array` with `n` elements dropped from the beginning.
   *创建一个切片数组，去除array前面的n个元素。（n默认值为1。）

   * @static
   * @memberOf _
   * @since 0.5.0
   * @category Array
   * @param {Array} array The array to query.
   * @param {number} [n=1] The number of elements to drop.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {Array} Returns the slice of `array`.
   * @example
   *
   * khufoo.drop([1, 2, 3]);
   * // => [2, 3]
   *
   * khufoo.drop([1, 2, 3], 2);
   * // => [3]
   *
   * khufoo.drop([1, 2, 3], 5);
   * // => []
   *
   * khufoo.drop([1, 2, 3], 0);
   * // => [1, 2, 3]
   */
  function drop(array, number) {
    if (number !== 0) {
      number = number || 1
    }

    for (var i = 0; i < number; i++) {
      array.shift()
    }
    return array

  }

  /**
   * Creates a slice of `array` with `n` elements dropped from the end.
   *创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Array
   * @param {Array} array The array to query.
   * @param {number} [n=1] The number of elements to drop.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {Array} Returns the slice of `array`.
   * @example
   *
   * khufoo.dropRight([1, 2, 3]);
   * // => [1, 2]
   *
   * khufoo.dropRight([1, 2, 3], 2);
   * // => [1]
   *
   * khufoo.dropRight([1, 2, 3], 5);
   * // => []
   *
   * khufoo.dropRight([1, 2, 3], 0);
   * // => [1, 2, 3]
   */
  function dropRight(array, number) {
    if (number !== 0) {
      number = number || 1
    }

    for (var i = 0; i < number; i++) {
      array.pop()
    }
    return array
  }

  /**
   * Creates a slice of `array` excluding elements dropped from the end.
   * Elements are dropped until `predicate` returns falsey. The predicate is
   * invoked with three arguments: (value, index, array).
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Array
   * @param {Array} array The array to query.
   * @param {Function} [predicate=_.identity] The function invoked per iteration.
   * @returns {Array} Returns the slice of `array`.
   * @example
   *
   * var users = [
   *   { 'user': 'barney',  'active': true },
   *   { 'user': 'fred',    'active': false },
   *   { 'user': 'pebbles', 'active': false }
   * ];
   *
   * _.dropRightWhile(users, function(o) { return !o.active; });
   * // => objects for ['barney']
   *
   * // The `_.matches` iteratee shorthand.
   * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
   * // => objects for ['barney', 'fred']
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.dropRightWhile(users, ['active', false]);
   * // => objects for ['barney']
   *
   * // The `_.property` iteratee shorthand.
   * _.dropRightWhile(users, 'active');
   * // => objects for ['barney', 'fred', 'pebbles']
   */
  function dropRightWhile(array, predicate = identity) {
    let arr = []
    for (let i = array.length - 1; i >= 0; i--) {
      if (predicate(array[i], index, ary)) {
        arr.push(array[i].user)
      }
    }
    return arr
  }

  /**
   * Fills elements of `array` with `value` from `start` up to, but not
   * including, `end`.
   * 使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）。

Note: 这个方法会改变 array（愚人码头注：不是创建新数组）
   *
   * **Note:** This method mutates `array`.
   *
   * @static
   * @memberOf _
   * @since 3.2.0
   * @category Array
   * @param {Array} array The array to fill.
   * @param {*} value The value to fill `array` with.
   * @param {number} [start=0] The start position.
   * @param {number} [end=array.length] The end position.
   * @returns {Array} Returns `array`.
   * @example
   *
   * var array = [1, 2, 3];
   *
   * khufoo.fill(array, 'a');
   * console.log(array);
   * // => ['a', 'a', 'a']
   *
   * khufoo.fill(Array(3), 2);
   * // => [2, 2, 2]
   *
   * khufoo.fill([4, 6, 8, 10], '*', 1, 3);
   * // => [4, '*', '*', 10]
   */
  function fill(array, value, start, end) {
    start = start || 0

    if (!end) {
      if (end !== 0) {
        end = array.length
      }
    }
    for (var i = start; i < end; i++) {
      array[i] = value
    }
    return array
  }

  /* var users = [
   *   { 'user': 'barney',  'active': false },
   *   { 'user': 'fred',    'active': false },
   *   { 'user': 'pebbles', 'active': true }
   * ];
   *
   * khufoo.findIndex(users, function(o) { return o.user == 'barney'; });
   * // => 0
   *
   * // The `_.matches` iteratee shorthand.
   * khufoo.findIndex(users, { 'user': 'fred', 'active': false });
   * // => 1
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * khufoo.findIndex(users, ['active', false]);
   * // => 0
   *
   * // The `_.property` iteratee shorthand.
   * khufoo.findIndex(users, 'active');
   * // => 2
   * 
    输入：findIndex([{"user":"barney","active":false},{"user":"fred","active":false},{"user":"pebbles","active":true}],"function(o)  { \n        return  o.user  ==  'barney'; \n      }")
    输出/期望：0
    =================
    错误：TypeError: predicate is not a function
    输入：findIndex([{"user":"barney","active":false},{"user":"fred","active":false},{"user":"pebbles","active":true}],{"user":"fred","active":false})
    期望：1
    =================
    错误：TypeError: predicate is not a function
    输入：findIndex([{"user":"barney","active":false},{"user":"fred","active":false},{"user":"pebbles","active":true}],["active",false])
    期望：0
    =================
    错误：TypeError: predicate is not a function
    输入：findIndex([{"user":"barney","active":false},{"user":"fred","active":false},{"user":"pebbles","active":true}],"active")
    期望：2
   * 
   * 
   * 
   */
  function findIndex(array, predicate) {
    for (let i = 0; i < array.length; i++) {
      if (predicate(array[i])) {
        return i
      }
    }
    return -1
  }

  /**
   * Gets the first element of `array`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @alias first
   * @category Array
   * @param {Array} array The array to query.
   * @returns {*} Returns the first element of `array`.
   * @example
   *
   * khufoo.head([1, 2, 3]);
   * // => 1
   *
   * khufoo.head([]);
   * // => undefined
   */
  function head(array) {
    return array[0]
  }

  /**
   * Gets the index at which the first occurrence of `value` is found in `array`
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons. If `fromIndex` is negative, it's used as the
   * offset from the end of `array`.
   * 使用 SameValueZero 等值比较，返回首次 value 在数组array中被找到的 索引值， 如果 fromIndex 为负值，将从数组array尾端索引进行匹配。
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} [fromIndex=0] The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   * @example
   *
   * khufoo.indexOf([1, 2, 1, 2], 2);
   * // => 1
   *
   * // Search from the `fromIndex`.
   * khufoo.indexOf([1, 2, 1, 2], 2, 2);
   * // => 3
   */
  function indexOf(array, value, fromIndex) {
    if (fromIndex < 0) {
      fromIndex = array.length + fromIndex % array.length
    } else {
      fromIndex = fromIndex || 0
    }
    for (var i = 0; i < array.length; i++) {
      if (fromIndex + i >= array.length) {
        fromIndex = 0
      }
      if (array[i + fromIndex] === value) {
        return i + fromIndex
      }
    }
    return -1

  }

  /**
 * Gets all but the last element of `array`.
 * 去除数组array中的最后一个元素
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * khufoo.initial([1, 2, 3]);
 * // => [1, 2]
 */
  function initial(array) {
    array.pop()
    return array
  }

  /**
   * Creates an array of unique values that are included in all given arrays
   * using [`SameValueZero`]
   * 可以理解为给定数组的交集
   * (http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons. The order and references of result values are
   * determined by the first array.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {...Array} [arrays] The arrays to inspect.
   * @returns {Array} Returns the new array of intersecting values.
   * @example
   *
   * khufoo.intersection([2, 1], [2, 3]);
   * // => [2]
   */
  function intersection(...arrays) {
    let arr = []
    let brr = []
    for (let i = 0; i < arrays.length; i++) {
      arr = concat(arr, arrays[i])
    }
    for (let i = 0; i < arr.length; i++) {
      var juage = 0
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          juage = 1
        }
      }
      if (juage === 0) {
        arr.splice(i, 1).intersectionBy([arrays], [iteratee = khufoo.identity])
      }
    }
    return arr
  }

  /**
   * Converts all elements in `array` into a string separated by `separator`.
   *将 array 中的所有元素转换为由 separator 分隔的字符串。
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {Array} array The array to convert.
   * @param {string} [separator=','] The element separator.
   * @returns {string} Returns the joined string.
   * @example
   *
   * khufoo.join(['a', 'b', 'c'], '~');
   * // => 'a~b~c'
   */
  function join(array, separator) {
    let str = '' + array[0]
    for (let i = 1; i < array.length; i++) {
      str = str + separator + '' + array[i]
    }
    return str
  }

  /**
   * Gets the last element of `array`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to query.
   * @returns {*} Returns the last element of `array`.
   * @example
   *
   * khufoo.last([1, 2, 3]);
   * // => 3
   */
  function last(array) {
    let l = array.length
    return array[l - 1]
  }

  /**
   * This method is like `_.indexOf` except that it iterates over elements of
   * `array` from right to left.
   *从右到左遍历array的元素
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} [fromIndex=array.length-1] The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   * @example
   *
   * khufoo.lastIndexOf([1, 2, 1, 2], 2);
   * // => 3
   *
   * // Search from the `fromIndex`.
   * khufoo.lastIndexOf([1, 2, 1, 2], 2, 2);
   * // => 1
   */
  function lastIndexOf(array, value, fromIndex) {
    fromIndex = fromIndex || 0
    for (let i = array.length - 1 - fromIndex; i >= 0; i--) {
      if (array[i] === value) {
        return i
      }
    }
    return -1
  }

  /**
   * Gets the element at index `n` of `array`. If `n` is negative, the nth
   * element from the end is returned.
   *获取array数组的第n个元素。如果n为负数，则返回从数组结尾开始的第n个元素。
   * @static
   * @memberOf _
   * @since 4.11.0
   * @category Array
   * @param {Array} array The array to query.
   * @param {number} [n=0] The index of the element to return.
   * @returns {*} Returns the nth element of `array`.
   * @example
   *
   * var array = ['a', 'b', 'c', 'd'];
   *
   * khufoo.nth(array, 1);
   * // => 'b'
   *
   * khufoo.nth(array, -2);
   * // => 'c';
   */
  function nth(array, n) {
    if (n < 0) {
      n = array.length + n
    }
    return array[n]
  }

  /**
   * Removes all given values from `array` using
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
   * to remove elements from an array by predicate.
   *
   * @static
   * @memberOf _
   * @since 2.0.0
   * @category Array
   * @param {Array} array The array to modify.
   * @param {...*} [values] The values to remove.
   * @returns {Array} Returns `array`.
   * @example
   *
   * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
   *
   * khufoo.pull(array, 'a', 'c');
   * console.log(array);
   * // => ['b', 'b']
   */
  function pull(array, ...value) {
    let arr = value
    for (let j = 0; j < arr.length; j++) {
      for (let i = 0; i < array.length; i++) {
        if (array[i] === arr[j]) {
          array.splice(i, 1)
          i--
        }
      }

    }
    return array
  }

  /**
    * This method is like `_.pull` except that it accepts an array of values to remove.
    *
    * **Note:** Unlike `_.difference`, this method mutates `array`.
    *
    * @static
    * @memberOf _
    * @since 4.0.0
    * @category Array
    * @param {Array} array The array to modify.
    * @param {Array} values The values to remove.
    * @returns {Array} Returns `array`.
    * @example
    *
    * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
    *
    * khufoo.pullAll(array, ['a', 'c']);
    * console.log(array);
    * // => ['b', 'b']
    */
  function pullAll(array, values) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < values.length; j++) {
        if (array[i] === values[j]) {
          array.splice(i, 1)
          i--
        }
      }
    }
    return array
  }

  /**
    * Creates an array of values by running each element in `collection` thru
    * `iteratee`. The iteratee is invoked with three arguments:
    * (value, index|key, collection).
    *传入一个数组
    传入一个函数
    返回新数组 每一项为数组每一项经过函数处理后的值
    * Many lodash methods are guarded to work as iteratees for methods like
    * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
    *
    * The guarded methods are:
    * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
    * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
    * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
    * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
    *
    * @static
    * @memberOf _
    * @since 0.1.0
    * @category Collection
    * @param {Array|Object} collection The collection to iterate over.
    * @param {Function} [iteratee=_.identity] The function invoked per iteration.
    * @returns {Array} Returns the new mapped array.
    * @example
    *
    * function square(n) {
    *   return n * n;
    * }
    *
    * khufoo.map([4, 8], square);
    * // => [16, 64]
    *
    * khufoo.map({ 'a': 4, 'b': 8 }, square);
    * // => [16, 64] (iteration order is not guaranteed)
    *
    * var users = [
    *   { 'user': 'barney' },
    *   { 'user': 'fred' }
    * ];
    *
    * // The `_.property` iteratee shorthand.
    * khufoo.map(users, 'user');
    * // => ['barney', 'fred']
    * reduce实现map,filter,forEach,slice,fill,concat....

    */
  function map(collection, iteratee) {
    return collection.reduce((result, item, index, ary) => {
      result.push(iteratee(item, index, ary))
      return result
    }, [])
  }

  /**
* Reduces `collection` to a value which is the accumulated result of running
* each element in `collection` thru `iteratee`, where each successive
* invocation is supplied the return value of the previous. If `accumulator`
* is not given, the first element of `collection` is used as the initial
* value. The iteratee is invoked with four arguments:
* (accumulator, value, index|key, collection).
*根据整个数组计算出一个值
* Many lodash methods are guarded to work as iteratees for methods like
* `_.reduce`, `_.reduceRight`, and `_.transform`.
*
* The guarded methods are:
* `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
* and `sortBy`
*
* @static
* @memberOf _
* @since 0.1.0
* @category Collection
* @param {Array|Object} collection The collection to iterate over.
* @param {Function} [iteratee=_.identity] The function invoked per iteration.
* @param {*} [accumulator] The initial value.
* @returns {*} Returns the accumulated value.
* @see khufoo.reduceRight
* @example
*
* khufoo.reduce([1, 2], function(sum, n) {
*   return sum + n;
* }, 0);
* // => 3
*
* khufoo.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
*   (result[value] || (result[value] = [])).push(key);
*   return result;
* }, {});
* // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
*/
  function reduce(ary, reducer, initialValue) {
    for (let i = 0; i < ary.length; i++) {
      initialValue = reducer(initialValue, ary[i], i, ary)
    }
    return initialValue
  }

  /**
   * Iterates over elements of `collection`, returning an array of all elements
   * `predicate` returns truthy for. The predicate is invoked with three
   * arguments: (value, index|key, collection).
   *
   * **Note:** Unlike `_.remove`, this method returns a new array.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [predicate=_.identity] The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   * @see _.reject
   * @example
   *
   * var users = [
   *   { 'user': 'barney', 'age': 36, 'active': true },
   *   { 'user': 'fred',   'age': 40, 'active': false }
   * ];
   *
   * _.filter(users, function(o) { return !o.active; });
   * // => objects for ['fred']
   *
   * // The `_.matches` iteratee shorthand.
   * _.filter(users, { 'age': 36, 'active': true });
   * // => objects for ['barney']
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.filter(users, ['active', false]);
   * // => objects for ['fred']
   *
   * // The `_.property` iteratee shorthand.
   * _.filter(users, 'active');
   * // => objects for ['barney']
   */
  function filter(collection, predicate) {
    return collection.reduce((acc, item, index, ary) => {
      if (!predicate(item)) {
        acc.push(item)
      }
      return acc
    }, [])
  }

  // 判断一个属性名proName是否在一个对象obj里 返回属性值obj[propName]
  function property(propName) {
    return function (obj) {
      return obj[propName]
    }
  }

  // 返回传入的值 一般用于特殊情况的一个变量 传入函数体
  function identity(v) {
    return v
  }

  // 将符合iteratee函数的值 相加 返回和
  function sumBy(array, iteratee) {
    return array.reduce((result, item, index, ary) => {
      return result + iteratee(item)
    }, 0)
    //   for (i = 0; i < array.length; i++) {
    //     sum += iteratee(array[i])
    //   }
    //   return sum
  }

  // sumBy的特殊情况 无第二个参数
  function sum(array) {
    return sumBy(array, identity)
  }

  /**
   * Creates a function that performs a partial deep comparison between a given
   * object and `source`, returning `true` if the given object has equivalent
   * property values, else `false`.
   * 创建一个函数 实行局部深对比两者得到对象和source
   * 返回 true 如果得到的对象相等的值
   * 否者返回假
   * **Note:** The created function is equivalent to `_.isMatch` with `source`
   * partially applied.
   *
   * Partial comparisons will match empty array and empty object `source`
   * values against any array or object value, respectively. See `_.isEqual`
   * for a list of supported value comparisons.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Util
   * @param {Object} source The object of property values to match.
   * @returns {Function} Returns the new spec function.
   * @example
   *
   * var objects = [
   *   { 'a': 1, 'b': 2, 'c': 3 },
   *   { 'a': 4, 'b': 5, 'c': 6 }
   * ];
   *
   * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
   * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
   */
  function matches(source) {
    return function (obj) {
      for (key in obj) {
        if (key != source[key]) {
          return false
        }
      }
      return true
    }
  }

  /**
   * Creates a function that performs a partial deep comparison between the
   * value at `path` of a given object to `srcValue`, returning `true` if the
   * object value is equivalent, else `false`.
   * 创建一个函数 实行局部深对比两个的值 path 是否在 ovject里的srcValue
   * 如果object value 是相等的返回true
   * 否则返回false
   * **Note:** Partial comparisons will match empty array and empty object
   * `srcValue` values against any array or object value, respectively. See
   * `_.isEqual` for a list of supported value comparisons.
   *
   * @category Util
   * @param {Array|string} path The path of the property to get.
   * @param {*} srcValue The value to match.
   * @returns {Function} Returns the new spec function.
   * @example
   *
   * var objects = [
   *   { 'a': 1, 'b': 2, 'c': 3 },
   *   { 'a': 4, 'b': 5, 'c': 6 }
   * ];
   *
   * _.find(objects, _.matchesProperty('a', 4));
   * // => { 'a': 4, 'b': 5, 'c': 6 }
   */
  function matchesProperty(path, srcValue) {
    return function (a) {
      return matches(fromPairs(a))
    }
  }

  /**
   * The inverse逆 of `_.toPairs`; this method returns an object composed
   * from key-value `pairs`.
   *将特定类型的数组转换成对象
   * @category Array
   * @param {Array} pairs The key-value pairs.
   * @returns {Object} Returns the new object.
   * @example
   *
   * _.fromPairs([['a', 1], ['b', 2]]);
   * // => { 'a': 1, 'b': 2 }
   */
  //  function fromPairs(pairs){
  //    let obj = {}
  //   for (key of pairs) {
  //     obj[key[0]] = key[1]
  //   }
  //  }

  function fromPairs(pairs) {
    let obj = {}
    for (let i = 0; i < pairs.length; i += 1) {
      obj[pairs[i][0]] = pairs[i][1]
    }
    return obj
  }

  /**
   * Flattens `array` a single level deep.
   * 展平数组 如果数组包含数组则只展平一层数组
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to flatten.
   * @returns {Array} Returns the new flattened array.
   * @example
   *
   * _.flatten([1, [2, [3, [4]], 5]]);
   * // => [1, 2, [3, [4]], 5]
   */
  function flatten(array) {
    return array.reduce((result, item, index, ary) => {
      if (Array.isArray(item)) {
        result = [...result, ...item]
      } else {
        result.push(item)
      }
      return result
    }, [])
  }

  /**
   * Recursively flattens `array`.
   * 将array递归为一维数组
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Array
   * @param {Array} array The array to flatten.
   * @returns {Array} Returns the new flattened array.
   * @example
   *
   * _.flattenDeep([1, [2, [3, [4]], 5]]);
   * // => [1, 2, 3, 4, 5]
   */
  function flattenDeep(array) {
    return array.reduce((result, item, index, ary) => {
      if (Array.isArray(item)) {
        result = [...result, ...flattenDeep(item)]
      } else {
        result.push(item)
      }
      return result
    }, [])
  }

  /**
  * Recursively flatten `array` up to `depth` times.
  * 展平数组 指定次数depth
  * @static
  * @memberOf _
  * @since 4.4.0
  * @category Array
  * @param {Array} array The array to flatten.
  * @param {number} [depth=1] The maximum recursion depth.
  * @returns {Array} Returns the new flattened array.
  * @example
  *
  * var array = [1, [2, [3, [4]], 5]];
  *
  * _.flattenDepth(array, 1);
  * // => [1, 2, [3, [4]], 5]
  *
  * _.flattenDepth(array, 2);
  * // => [1, 2, 3, [4], 5]
  */
  function flattenDepth(array, depth = 1) {
    if (0 == depth) {
      return array.slice()
    }
    return array.reduce((result, item, index, ary) => {
      if (Array.isArray(item)) {
        result = [...result, ...flattenDepth(item, depth--)]
      } else {
        result.push(item)
      }
      return result
    }, [])
  }

  /**
   * The inverse of `_.toPairs`; this method returns an object composed
   * from key-value `pairs`.
   *
   * @static
   * @category Array
   * @param {Array} pairs The key-value pairs.
   * @returns {Object} Returns the new object.
   * @example
   *
   * _.fromPairs([['a', 1], ['b', 2]]);
   * // => { 'a': 1, 'b': 2 }
   */
  function fromPairs(pairs) {
    let obj = {}
    for (let i = 0; i < pairs.length; i++) {
      obj[pairs[i][0]] = pairs[i][1]
    }
    return obj
  }




  function parseJson(str) {
    let i = -1
    let obj = {}
    if (i === str.length) {
      return
    }
    let escape = ['b', 't', 'n', 'v', 'f', 'r', '"', "'", '\\']

    return isOneValue()

    function isOneValue() { // --------------------------------------------------
      i++
      if (str[i] === '\\') {
        for (let i = 0; i < escape.length; i++) {
          if (str[i + 1] === escape[i]) {
            i++
            break
          }
        }
      }
      if (/\d|\.|-/.test(str[i])) {
        return isNumber()
      } else if (str[i] === '[') {
        return isArray()
      } else if (str[i] === '{') {
        return isObject()
      } else if (str[i] === '"') {
        return isString()
      } else if (str[i] === 't') {
        return isTrue()
      } else if (str[i] === 'n') {
        return isNull()
      } else if (str[i] === 'f') {
        return isFalse()
      } else {
        throw new Error('key error' + i)
      }
    }

    function isTrue() { // --------------------------------------------------
      let token = str.slice(i, i + 4)
      if (token === 'true') {
        i = i + 4
        return true
      } else {
        throw new Error('no true', i)
      }
    }

    function isFalse() {  // --------------------------------------------------
      let token = str.slice(i, i + 5)
      if (token === 'false') {
        i = i + 5
        return false
      } else {
        throw new Error('no false', i)
      }
    }

    function isNull() { // --------------------------------------------------
      let token = str.slice(i, i + 4)
      if (token === 'null') {
        i = i + 4
        return null
      } else {
        throw new Error('no null', i)
      }
    }

    function isNumber() { // --------------------------------------------------
      let j = i
      while (1) {
        let num = str[j]
        if (num >= 0 && num <= 9) {
          j++
        } else if (num === '-' || num === '+') {
          j++
        } else if (num === '.' || num === 'e' || num === 'E') {
          j++
        } else {
          break
        }
      }
      let rrr = str.slice(i, j)
      i = j
      return parseFloat(rrr)
    }

    function isString() { // --------------------------------------------------
      i++
      let j = i
      while (1) {
        if (str[j] === '"') {
          break
        }
        j++
      }
      let aaa = str.slice(i, j)
      i = j + 1
      return aaa
    }

    function isArray() {  // --------------------------------------------------
      let arr = []
      if (str[i] === ']') {
        i++
        return arr
      }
      while (1) {
        let value = isOneValue()
        arr.push(value)
        if (str[i] === ',') {
          continue
        } else if (str[i] === ']') {
          i++
          return arr
        }

      }
    }

    // {"213":"dgdfg","sdf":12312}
    function isObject() { // --------------------------------------------------
      let obj = {}
      if (str[i] === '}') {
        i++
        return obj
      }
      while (1) {
        let key = isOneValue()
        let value = isOneValue()
        obj[key] = value
        if (str[i] === ',') {

          continue
        } else if (str[i] === '}') {
          i++
          return obj
        }
      }
    }

  }








  



  return {
    /*------@/category Lang------------------------------------*/

    isObjectLike: isObjectLike,
    isNumber: isNumber,
    isNaN: isNaN, // <----------------
    isNull: isNull,
    isUndefined: isUndefined,
    isNil: isNil,
    //const常亮 xxxTag
    //getTypeTag()
    isFunction: isFunction,
    isBoolean: isBoolean,
    isString: isString,
    isObject: isObject,  // <----------------
    isRegExp: isRegExp,
    isSet: isSet,
    isWeakSet: isWeakSet,
    isMap: isMap,
    isWeakMap: isWeakMap,
    isSymbol: isSymbol,
    isDate: isDate,

    isArguments: isArguments, // <----------------
    isArray: isArray, // <----------------
    isArrayBuffer: isArrayBuffer,
    // isTypedArray: isTypedArray,
    // isLength: isLength,
    isArrayLike: isArrayLike, // <----------------
    // isArrayLikeObject: isArrayLikeObject,
    // isPlainObject: isPlainObject, // <----------------
    // isObjectLike: isObjectLike,
    isElement: isElement, // <----------------
    toNumber: toNumber,
    // toFinite: toFinite,  // <----------------
    // isFinite: isFinite,
    // isNegativeZero: isNegativeZero, //<------------- lodash源码中没有，我自己加的
    // toInteger: toInteger,
    // toSafeInteger: toSafeInteger,
    // isInteger: isInteger,
    // isSafeInteger: isSafeInteger,
    // isEmpty: isEmpty,
    // isError: isError,
    // isNative: isNative, // <----------------

    // //baseIsEqual
    isEqual: isEqual, // <----------------
    // isEqualWith: isEqualWith, // <----------------
    // isMatch: isMatch, // <----------------
    // isMatchWith: isMatchWith,

    // toLength: toLength,
    // toArray: toArray,
    // toString: toString,


    // toPath: toPath,

    // castArray: castArray,

    // clone: clone,
    // cloneDeep: cloneDeep, // <----------------

    // lt: lt,
    // lte: lte,
    // gt: gt,
    // gte: gte,
    // eq: eq,

    // /*--------------------------------------@category Util------------------------------------*/

    // noop: noop,
    // identity: identity,
    // iteratee: iteratee,
    // nthArg: nthArg,
    // uniqueId: uniqueId,
    // times: times,
    // mixin: mixin,
    // constant: constant,
    // matches: matches,
    // conforms: conforms,
    // conformsTo: conformsTo,
    // defaultTo: defaultTo,
    // flow: flow,
    // flowRight: flowRight,

    // /*--------------------------------------@category Math------------------------------------*/
    // add: add,
    // subtract: subtract,
    // multiply: multiply,
    // divide: divide,
    // ceil: ceil,
    // floor: floor,
    // round: round,
    // //baseMax
    // max: max,
    // maxBy: maxBy,
    // //baseMin
    // min: min,
    // minBy: minBy,
    // //baseSum
    // sum: sum,
    // sumBy: sumBy,
    // //baseMean
    // mean: mean,
    // meanBy: meanBy,

    // /*--------------------------------------@category Array------------------------------------*/

    // chunk: chunk,

    // compact: compact,

    // fromPairs: fromPairs, //参考： toPairs, toPairsIn

    // head: head,
    // last: last,
    // nth: nth,
    // initial: initial,
    // tail: tail,
    // take: take,
    // takeRight: takeRight,
    // takeWhile: takeWhile,
    // takeRightWhile: takeRightWhile,

    // //baseFindIndex
    // findIndex: findIndex,
    // findLastIndex: findLastIndex,
    // indexOf: indexOf,
    // lastIndexOf: lastIndexOf,
    // sortedIndexOf: sortedIndexOf, // <--- baseSortedIndexBy 
    // sortedLastIndexOf: sortedLastIndexOf, // <--- baseSortedIndexBy 

    // //baseSortedIndexBy
    // sortedIndex: sortedIndex,
    // sortedLastIndex: sortedLastIndex,
    // sortedIndexBy: sortedIndexBy,
    // sortedLastIndexBy: sortedLastIndexBy,

    // //baseSortedUniq
    // sortedUniq: sortedUniq,
    // sortedUniqBy: sortedUniqBy,

    // //baseUniq
    // uniq: uniq,
    // uniqBy: uniqBy,
    // uniqWith: uniqWith,
    // union: union,
    // unionBy: unionBy,
    // unionWith: unionWith,

    // //baseIntersection
    // intersection: intersection,
    // intersectionBy: intersectionBy,
    // intersectionWith: intersectionWith,

    // //baseXor
    // xor: xor,
    // xorBy: xorBy,
    // xorWith: xorWith,

    // //baseDifference
    // difference: difference,
    // differenceBy: differenceBy,
    // differenceWith: differenceWith,

    // without: without,

    // pull: pull,
    // pullAll: pullAll,
    // pullAllBy: pullAllBy,
    // pullAllWith: pullAllWith,
    // pullAt: pullAt,

    // drop: drop,
    // dropRight: dropRight,
    // dropWhile: dropWhile,
    // dropRightWhile: dropRightWhile,

    // //baseFlatten
    // flatten: flatten,
    // flattenDepth: flattenDepth,
    // flattenDeep: flattenDeep,

    // //baseUnzip
    // zip: zip,
    // zipWith: zipWith,
    // zipObject: zipObject,
    // zipObjectDeep: zipObjectDeep,
    // unzip: unzip,
    // unzipWith: unzipWith,

    // keyBy: keyBy,
    // groupBy: groupBy,
    // countBy: countBy,

    // //baseOrderBy
    // orderBy: orderBy,
    // sortBy: sortBy,

    // /*------------@category Object------------------------------------*/

    // toPairs: toPairs, //参考： fromPairs
    // toPairsIn: toPairsIn,
    // keys: keys,
    // keysIn: keysIn,
    // //baseMap
    // mapKeys: mapKeys,
    // mapValues: mapValues,
    // invert: invert,
    // invertBy: invertBy,

    // get: get,
    // at: at,
    // //baseHas
    // has: has,
    // hasIn: hasIn,
    // invoke: invoke,

    // create: create,
    // assign: assign,
    // assignIn: assignIn,
    // merge: merge,
    // mergeWith: mergeWith,
    // defaults: defaults,
    // defaultsDeep: defaultsDeep,
    // //baseSet
    // set: set,
    // setWith: setWith,
    // unset, unset,

    // forIn: forIn,
    // forInRight: forInRight,
    // forOwn: forOwn,
    // forOwnRight: forOwnRight,
    // functions: functions,
    // functionsIn: functionsIn,

    // findKey: findKey,
    // findLastKey: findLastKey,


    /* ----一开始写的---------------------- */




    chunk: chunk,
    compact: compact,
    concat: concat,
    difference: difference,
    differenceBy: differenceBy,
    drop: drop,
    dropRight: dropRight,
    fill: fill,
    head: head,
    indexOf: indexOf,
    initial: initial,
    intersection: intersection,
    join: join,
    last: last,
    lastIndexOf: lastIndexOf,
    nth: nth,
    pull: pull,
    pullAll: pullAll,
    findIndex: findIndex,
    reduce: reduce,
    map: map,
    filter: filter,
    property: property,
    sumBy: sumBy,
    identity: identity,
    sum: sum,
    dropRightWhile: dropRightWhile,
    matches: matches,
    fromPairs: fromPairs,
    flatten: flatten,
    flattenDeep: flattenDeep,
    flattenDepth: flattenDepth,
    parseJson: parseJson
  }
}()






















