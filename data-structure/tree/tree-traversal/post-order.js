/**
 * 		15 
 * 	/  	 \
 * 20		  25
 * / \			\
 * 30	35		40
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

function post(node) {
  if (node === undefined) return;

  post(node.left);
  post(node.right);
  console.log(node.val);
}

post(tree);
