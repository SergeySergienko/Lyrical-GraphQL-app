import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class SongList extends Component {
  renderSongs() {
    return this.props.data.songs.map(song => (
      <li key={song.id} className="collection-item">
        {song.title}
      </li>
    ));
  }
  render() {
    this.props.data.songs && console.log(this.renderSongs());
    const content = this.props.data.loading ? (
      <div>Loading...</div>
    ) : (
      this.renderSongs()
    );
    return (
      <div>
        <h4>Song List</h4>
        <ul className="collection">{content}</ul>
      </div>
    );
  }
}

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);
