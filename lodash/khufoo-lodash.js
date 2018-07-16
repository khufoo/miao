var khufoo = function () {

  /**
   * Creates an array of elements split into groups the length of `size`.
   * If `array` can't be split evenly, the final chunk will be the remaining
   * elements.
   * 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Array
   * @param {Array} array The array to process.
   * @param {number} [size=1] The length of each chunk
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {Array} Returns the new array of chunks.
   * @example
   *
   * _.chunk(['a', 'b', 'c', 'd'], 2);
   * // => [['a', 'b'], ['c', 'd']]
   *
   * _.chunk(['a', 'b', 'c', 'd'], 3);
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
   * 创建一个新数组，包含原数组中所有的非假值元素。例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”。
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
   * _.compact([0, 1, false, 2, '', 3]);
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
   * var other = _.concat(array, 2, [3], [[4]]);
   *
   * console.log(other);
   * // => [1, 2, 3, [4]]
   *
   * console.log(array);
   * // => [1]
   * 

   * 
   */

  function concat(array, ...values) {
    for (let i = 0; i < values.length; i++) {
      array = array.concat(values[i])
    }
    return array
  }



  /**
   * Creates an array of `array` values not included in the other given arrays
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
   * @see _.without, _.xor
   * @example
   *
   * _.difference([2, 1], [2, 3]);
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
   * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
   * // => [1.2]
   *
   * // The `_.property` iteratee shorthand.
   * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
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
      arr.push(iteratee(array[i]))
    }
    let varr = []
    for (let i = 0; i < values.length; i++) {
      varr.push(iteratee(values[i]))
    }
    return difference(arr, varr)
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
   * _.drop([1, 2, 3]);
   * // => [2, 3]
   *
   * _.drop([1, 2, 3], 2);
   * // => [3]
   *
   * _.drop([1, 2, 3], 5);
   * // => []
   *
   * _.drop([1, 2, 3], 0);
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
   * _.dropRight([1, 2, 3]);
   * // => [1, 2]
   *
   * _.dropRight([1, 2, 3], 2);
   * // => [1]
   *
   * _.dropRight([1, 2, 3], 5);
   * // => []
   *
   * _.dropRight([1, 2, 3], 0);
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
   * _.fill(array, 'a');
   * console.log(array);
   * // => ['a', 'a', 'a']
   *
   * _.fill(Array(3), 2);
   * // => [2, 2, 2]
   *
   * _.fill([4, 6, 8, 10], '*', 1, 3);
   * // => [4, '*', '*', 10]
   */


  function fill(array, value, start, end) {
    start = start || 0

    end !== 0 ? end = end || start.length : end
    for (var i = start; i < end; i++) {
      array[i] = value
    }
    return array
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
   * _.head([1, 2, 3]);
   * // => 1
   *
   * _.head([]);
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
   * _.indexOf([1, 2, 1, 2], 2);
   * // => 1
   *
   * // Search from the `fromIndex`.
   * _.indexOf([1, 2, 1, 2], 2, 2);
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
 * _.initial([1, 2, 3]);
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
   * _.intersection([2, 1], [2, 3]);
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
        arr.splice(i, 1).intersectionBy([arrays], [iteratee = _.identity])
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
   * _.join(['a', 'b', 'c'], '~');
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
   * _.last([1, 2, 3]);
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
   * _.lastIndexOf([1, 2, 1, 2], 2);
   * // => 3
   *
   * // Search from the `fromIndex`.
   * _.lastIndexOf([1, 2, 1, 2], 2, 2);
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
   * _.nth(array, 1);
   * // => 'b'
   *
   * _.nth(array, -2);
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
   * _.pull(array, 'a', 'c');
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
    * _.pullAll(array, ['a', 'c']);
    * console.log(array);
    * // => ['b', 'b']
    */

  function pullAll(array, values) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < values.length; j++) {
        if (array[i] === values[j]){
          array.splice(i, 1)
          i --
        }
      }
    }
    return array
  }














  return {
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
  }
}()






















