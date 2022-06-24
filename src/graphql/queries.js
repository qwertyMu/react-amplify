/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const searchContacts = /* GraphQL */ `
  query SearchContacts(
    $filter: SearchableContactFilterInput
    $sort: [SearchableContactSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableContactAggregationInput]
  ) {
    searchContacts(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        name
        phoneNumber
        emailAddress
        notes
        source
        exhibit
        history {
          id
          date
          customerId
          customerUser
          reasonForSearch
          exhibitDownloaded
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        contactHistoryId
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchHistories = /* GraphQL */ `
  query SearchHistories(
    $filter: SearchableHistoryFilterInput
    $sort: [SearchableHistorySortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableHistoryAggregationInput]
  ) {
    searchHistories(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        date
        customerId
        customerUser
        reasonForSearch
        exhibitDownloaded
        createdAt
        updatedAt
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      priority
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        priority
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getContact = /* GraphQL */ `
  query GetContact($id: ID!) {
    getContact(id: $id) {
      id
      name
      phoneNumber
      emailAddress
      notes
      source
      exhibit
      history {
        id
        date
        customerId
        customerUser
        reasonForSearch
        exhibitDownloaded
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      contactHistoryId
    }
  }
`;
export const listContacts = /* GraphQL */ `
  query ListContacts(
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        phoneNumber
        emailAddress
        notes
        source
        exhibit
        history {
          id
          date
          customerId
          customerUser
          reasonForSearch
          exhibitDownloaded
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        contactHistoryId
      }
      nextToken
    }
  }
`;
export const getHistory = /* GraphQL */ `
  query GetHistory($id: ID!) {
    getHistory(id: $id) {
      id
      date
      customerId
      customerUser
      reasonForSearch
      exhibitDownloaded
      createdAt
      updatedAt
    }
  }
`;
export const listHistories = /* GraphQL */ `
  query ListHistories(
    $filter: ModelHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHistories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        customerId
        customerUser
        reasonForSearch
        exhibitDownloaded
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
