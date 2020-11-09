import React from "react";
import { connect } from "react-redux";
import axios from "axios";

class Home extends React.Component {
  constructor(props) {
    super()
    this.state = {
      title: '',
      servings: '',
      image: '',
      instructions: ''
    }
    this.clicked = this.clicked.bind(this)
    this.extractedRecipe = this.extractedRecipe.bind(this)
  }

  componentDidMount() {
    // tbd
  }

  async extractedRecipe(e) {
    let params = {
      apiKey:'179162a815264406b6eee2d69abad1dd',
      url: document.getElementById('urlForRecipe').value,
      //'https://foodista.com/recipe/ZHK4KPB6/chocolate-crinkle-cookies',
      forceExtraction: false,
      analyze: false
    }

    console.log('the value in the input field was: ', params.url)

    let extract = (await axios.get('https://api.spoonacular.com/recipes/extract', {params} )).data
    console.log(extract)
    this.setState({
      title: extract.title,
      servings: extract.servings,
      image: extract.image,
      instructions: extract.instructions
    })
  }

  async clicked(e) {
    // var options = {
    //   method: 'GET',
    //   url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/extract',
    //   params: {url: 'http://www.melskitchencafe.com/the-best-fudgy-brownies/'},
    //   headers: {
    //     'x-rapidapi-key': '179162a815264406b6eee2d69abad1dd',
    //     'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    //   }
    // };

    //let apiKey = '179162a815264406b6eee2d69abad1dd'

    // var options = {
    //   method: 'GET',
    //   url: `https://api.spoonacular.com/recipes/716429/information?apiKey=${apiKey}&includeNutrition=true`,
    //   //params: {url: 'http://www.melskitchencafe.com/the-best-fudgy-brownies/'},
    //   headers: {
    //     //'x-rapidapi-key': '179162a815264406b6eee2d69abad1dd',
    //     'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    //   }
    // };

    let params = {
      apiKey:'179162a815264406b6eee2d69abad1dd',
      includeNutrition: true
    }

    let recipe = (await axios.get('https://api.spoonacular.com/recipes/716429/information', {params} )).data
    console.log(recipe)

    // axios.request(options).then(function (response) {
    //   console.log('response is: ', response.data);
    // }).catch(function (error) {
    //   console.error('got an error: ', error);
    // });
    //console.log('I have been clicked')
  }

  render () {
    return (
      <div className = 'Home'>
        Put in the recipe url here: <input id="urlForRecipe"></input>
        <p></p>
        <button onClick={this.clicked}>Try a simple recipe request</button>
        <button onClick={this.extractedRecipe}>Try me to extract a recipe</button>
        <ul>
          <li>
          Title: {this.state.title}
          </li>
          <li>
            Servings: {this.state.servings}
          </li>
          <li>
            Instructions: {this.state.instructions}
          </li>
        </ul>
      </div>
    )
  }
}

const mapState = (state) => ({
  //user: state.user
});

const mapDispatch = (dispatch) => ( {
    // deleteUser: (userId) => dispatch(deleteUser(userId)),
    // updateUser: (userId, userProfile) => dispatch(editProfile(userId, userProfile))
  }
)

export default connect(mapState, mapDispatch)(Home);
