import { Quote } from "../data/quote.interface";


export class QuotesService {
    private favoriteQuote : Quote[] = [];
    addQuoteToFavorite(quote : Quote){
        this.favoriteQuote.push(quote);
        console.log(this.favoriteQuote);
    }
    removeQuoteFromFavorite(quote : Quote){
        const position = this.favoriteQuote.findIndex((quoteEl : Quote) =>{
            return quoteEl.id == quote.id;
        })
        this.favoriteQuote.splice(position, 1)
    }
    getFavoriteQuote(){
        return this.favoriteQuote.slice();
    }
    isQuoteFavorite(quote : Quote){
        return this.favoriteQuote.find((quoteEl : Quote)=>{
            return quoteEl.id == quote.id;
        });
    }
}