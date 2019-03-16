import React, { Component } from "react";
import { Modals } from "./NewPost/Modals";
import { Buttons } from "./NewPost/Buttons";
import { FeedList } from "./FeedList";
import { getAllPosts } from "../../../services/postFetch";
import { FilterPost } from "./FilterPost";

export class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      buttonType: null,
      selectedOption: null,
      skip: 0,
      top: 10
    };
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    getAllPosts().then(postList => {
      this.setState({
        posts: postList
      });
    });
  };

  resetButtonType = () => {
    this.setState({ buttonType: null });
  };

  clickedBtn = event => {
    let targetBtn = event.target.parentElement.getAttribute("data-target");
    this.setState({ buttonType: targetBtn });
  };

  selectedPost = event => {
    let selectedOpt = event.target.value;
    this.setState({ selectedOption: selectedOpt });
  };

  render() {
    return (
      <div className="row container feed">
        <div className="col s12">
          <FeedList
            posts={this.state.posts}
            selectedOption={this.state.selectedOption}
          />
          <FilterPost selectedPost={this.selectedPost} />
          <Modals
            buttonType={this.state.buttonType}
            closeModal={this.resetButtonType}
            changeState={this.getPosts}
          />
          <Buttons activeBtn={this.clickedBtn} />
        </div>
      </div>
    );
  }
}
