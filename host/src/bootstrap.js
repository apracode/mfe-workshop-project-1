import { mountCard } from "card/CardIndex";
import { mountHeader } from "header/HeaderIndex";

mountHeader(document.querySelector("#app-header"));
mountCard(document.querySelector("#app-card"));