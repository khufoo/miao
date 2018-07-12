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
    for(var i = 0; i < array.length; i ++) {
      if(array[i]){
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
    if (arguments == 2) {
      return difference(array, values)
    }
  }



















  return {
    chunk: chunk,
    compact: compact,
    concat: concat,
    difference: difference,
    differenceBy: differenceBy
  }
}()






















