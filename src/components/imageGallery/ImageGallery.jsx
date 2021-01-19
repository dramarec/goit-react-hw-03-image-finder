import React, { Component } from 'react';

import Searchbar from '../searchbar/Searchbar';
import ImagaGalleryItem from './imgagGalleryItem/ImagaGalleryItem';

import articlesApi from '../../services/articlesApi';
import Modal from '../modal/Modal';
import Button from './button/Button';
import StartPage from './StartPage';
import Spinner from '../loader/Loader';

class ImageGallery extends Component {
    state = {
        articles: [],
        loading: false,
        error: null,
        largeImageURL: null,
        searchQuery: '',
        page: 1,
    };

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyEsc);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate :');
        const prevQuery = prevState.searchQuery;
        const nextQuery = this.state.searchQuery;

        if (prevQuery !== nextQuery) {
            this.fetchArticles();
        }
    }

    fetchArticles = () => {
        const { searchQuery, page } = this.state;
        this.setState({ loading: true });

        articlesApi
            .fetchArticlesWithQuery(searchQuery, page)
            .then(articles => {
                this.setState(prevState => ({
                    articles: [...prevState.articles, ...articles],
                    page: prevState.page + 1,
                }));
                if (this.state.page > 2) {
                    this.handScroll();
                }
            })
            .catch(error => this.setState({ error }))
            .finally(() => this.setState({ loading: false }));
    };

    toggleModal = url => {
        this.setState({ largeImageURL: url.target.dataset.url });
    };
    handleKeyEsc = e => {
        if (e.code === 'Escape') {
            this.setState({ largeImageURL: null });
        }
    };

    handleClick = e => {
        if (e.target.nodeName !== 'IMG') {
            this.setState({
                largeImageURL: null,
            });
        }
    };
    handScroll = e => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    };

    handleSearchSubmit = query => {
        this.setState({
            searchQuery: query,
            page: 1,
            articles: [],
        });
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyEsc);
    }

    render() {
        const { articles, loading, error, largeImageURL } = this.state;

        return (
            <>
                <h2>{this.props.title}</h2>

                <Searchbar onSubmit={this.handleSearchSubmit} />

                {error && <p>Something went wrong: {error.message} </p>}

                {articles.length === 0 && <StartPage />}

                {articles.length > 0 && (
                    <ul className="ImageGallery">
                        {articles.map(article => (
                            <ImagaGalleryItem
                                key={article.id}
                                article={article}
                                onHandleClick={this.toggleModal}
                            />
                        ))}
                    </ul>
                )}

                {largeImageURL && (
                    <Modal
                        img={largeImageURL}
                        onHandleClick={this.handleClick}
                    />
                )}

                {loading && <Spinner />}

                {articles.length > 0 && !loading && (
                    <Button onFetchArticles={this.fetchArticles} />
                )}
            </>
        );
    }
}

export default ImageGallery;
