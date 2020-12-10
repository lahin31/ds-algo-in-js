class Tree {
  constructor(value) {
    this.value = value;
    this.decendents = [];
  }

  showDecendents() {
    return this.decendents;
  }
}

const root = new Tree("Root");
const usa = new Tree("USA");
const california = new Tree("California");
const uk = new Tree("UK");
const london = new Tree("London");

root.decendents.push(usa);
usa.decendents.push(california);
root.decendents.push(uk);
uk.decendents.push(london);

console.log(root.showDecendents());
