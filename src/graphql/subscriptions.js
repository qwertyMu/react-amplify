/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
      id
      name
      description
      priority
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
      id
      name
      description
      priority
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
      id
      name
      description
      priority
      createdAt
      updatedAt
    }
  }
`;
export const onCreateContact = /* GraphQL */ `
  subscription OnCreateContact {
    onCreateContact {
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
export const onUpdateContact = /* GraphQL */ `
  subscription OnUpdateContact {
    onUpdateContact {
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
export const onDeleteContact = /* GraphQL */ `
  subscription OnDeleteContact {
    onDeleteContact {
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
export const onCreateHistory = /* GraphQL */ `
  subscription OnCreateHistory {
    onCreateHistory {
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
export const onUpdateHistory = /* GraphQL */ `
  subscription OnUpdateHistory {
    onUpdateHistory {
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
export const onDeleteHistory = /* GraphQL */ `
  subscription OnDeleteHistory {
    onDeleteHistory {
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
