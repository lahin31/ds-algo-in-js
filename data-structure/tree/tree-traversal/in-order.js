/**	
 *        15	
 * 	    /   \	
 *     20    25	
 *    /	 \     \	
 *   30	 35	   40	
 *	
 */

const tree = {
  val: 15,
  left: {
    val: 20,
    left: {
      val: 30,
    },
    right: {
      val: 35,
    },
  },
  right: {
    val: 25,
    right: {
      val: 40,
    },
  },
};

function in_order(node) {
  if (node === undefined) return;

  in_order(node.left);
  console.log(node.val);
  in_order(node.right);
}

in_order(tree);
