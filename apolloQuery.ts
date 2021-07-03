import { gql } from "@apollo/client";

export const GET_ALL_VIDEOS = gql`
  query allVideos($after: String) {
    allVideos(limit: 4, after: $after) {
      items {
        id
        name
        description
        url
        poster
        getShareUrl
        duration
        vendorName
        publicationDate
        Tags {
          name
          placeholders
          id
        }
        Event {
          name
          description
          location
        }
      }
      cursor {
        before
        after
      }
    }
  }
`;

export const GET_FUNZONE_VIDEOS = gql`
  query funzoneVideos {
    allVideos(tags: "Funzone", limit: 4) {
      items {
        id
        name
        description
        url
        poster
        duration
        publicationDate
        Tags {
          name
          placeholders
        }
        Event {
          name
          description
          location
        }
      }
    }
  }
`;

export const GET_TESTIMONIALES_VIDEOS = gql`
  query testimonialesVideos {
    allVideos(tags: "Testimoniales", limit: 4) {
      items {
        id
        name
        description
        url
        poster
        duration
        publicationDate
        Tags {
          name
          placeholders
        }
        Event {
          name
          description
          location
        }
      }
    }
  }
`;

export const GET_ONE_VIDEO = gql`
  query oneVideo($id: ID!) {
    video(id: $id) {
      id
      name
      description
      url
      poster
      duration
      publicationDate
      Tags {
        placeholders
        name
      }
      Event {
        name
        description
        location
      }
    }
  }
`;
