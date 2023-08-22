export interface MainAppProps {
  mainFunctions:
    | object
    | { client: unknown; contract: unknown; gateway: unknown };
}
