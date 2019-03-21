let renderEntireTree;
let state = {
  posts: [
    {
      postBy: {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVMNrgrlhHs9bSC63sLecJsZ6S0QS2-iYJWMlQQFFhaU3vblOt',
        name: 'Misha'
      },
      text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis laborum minima mollitia nesciunt, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis laborum minima mollitia nesciunt, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis laborum minima mollitia nesciunt, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis laborum minima mollitia nesciunt, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis laborum minima mollitia nesciunt, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis laborum minima mollitia nesciunt, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis laborum minima mollitia nesciunt, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis laborum minima mollitia nesciunt, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis laborum minima mollitia nesciunt, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis laborum minima mollitia nesciunt, perferendis?'
    }, {
      postBy: {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVMNrgrlhHs9bSC63sLecJsZ6S0QS2-iYJWMlQQFFhaU3vblOt',
        name: 'Misha'
      },
      text: 'Hello my friends:) Im fine!'
    },
    {
      postBy: {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQazb7jkkWezbOBw7uKRZ2sDY15KQy55Fq5p818eYeEg1MR2QfFxg',
        name: 'Вася'
      },
      text: 'Hello Misha))'
    }
  ],
  person: {name: 'Misha Sonstav', country: 'Belarus'},
  messages: [
    {sender: {name: "Максим"}, text: "Hello :)"},
    {sender: {name: "Максим"}, text: "How are you "},
    {sender: {name: "Максим"}, text: "How are you "},
    {sender: {name: "Максим"}, text: "How are you "},
    {
      sender: {name: "Максим"},
      text: "How are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are you "
    },
    {text: "Hello hello"}
  ],
};

export let addPost = (text) => {
  state.posts.push({
    postBy: {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVMNrgrlhHs9bSC63sLecJsZ6S0QS2-iYJWMlQQFFhaU3vblOt',
      name: 'Misha',
    },
    text: text
  });
  renderEntireTree();
};

export const subscribe = (observer) => {
  renderEntireTree = observer;
};


export default state;
