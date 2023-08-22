export interface MainAppProps {
  mainFunctions:
    | { client: unknown; contract: unknown; gateway: unknown }
    | object;
}
