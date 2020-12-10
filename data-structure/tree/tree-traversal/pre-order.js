/**
 * 				15
 * 			/  	 \
 *     20		  25
 *    /	 \			\
 * 	 30		35		40
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

function pre_order(node) {
  if (node === undefined) return;

  console.log(node.val);
  pre_order(node.left);
  pre_order(node.right);
}

pre_order(tree);
