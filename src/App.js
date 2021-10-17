import './App.css';
import { Component } from 'react';
import pixabayFetchPhoto from './services/pixabay';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';

export default class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    search: '',
    error: null,

  };

  handleSubmit = newSearch => {
    this.setState({ search: newSearch, currentPage: 1, images: [] });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.fetchPhoto();
    }
  }

  fetchPhoto = () => {
    const { search, currentPage } = this.state;
    
    pixabayFetchPhoto(search, currentPage)
      .then(gallery => {
        this.setState(prevState => ({
          images: [...prevState.images, ...gallery],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      
  }

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={this.state.images} />
        <Button onClick={this.fetchPhoto}/>
      </div>
    );
  }
}

