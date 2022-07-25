import React from "react";
import { request, gql } from "graphql-request";
import { useQuery } from "react-query";
import NominalData from "../results/tableData/nominalDataTable";
import IdentifierDataTable from "../results/tableData/identifierDataTable";

// const endpoint = "https://api.spacex.land/graphql/";
const endpoint = "http://127.0.0.1:8000/api/graphql";

// const QUERY = gql`
//   {
//     launchesPast(limit: 10) {
//       id
//       mission_name
//     }
//   }
// `;

const QUERY = gql`
  {
    nominal(filters: {name: "Batman"}) {
      name
      dateOfBirth
    }
    identifier {
      id
      value
      attributions {
        nominal {
          name
          dateOfBirth
        }
      }
    }
    interaction {
      type
      datetimeEnd
      datetimeStart
      content
      origin {
        value
      }
      target {
        value
      }
    }
  }
`;


export default function GlitchSearchComponent() {
  const { data, isLoading, error } = useQuery("launches", () => {
    return request(endpoint, QUERY);
  });

  if (isLoading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  const nominalID = data.identifier

  return (
    <div>
      <h2>Nominals</h2>
      <NominalData nominalData={data.nominal} nominalID={nominalID} />
      <br />
      <h2>Known Identifiers</h2>
      <IdentifierDataTable identifierData={data.identifier} />
    </div>
    
        
  );
}