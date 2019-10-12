//ToDo: Import vue and name it Vue
import { runInThisContext } from 'vm';
import Vue from 'vue';

export const loadData = ({commit}) => {
    Vue.http.get('data.json')
        .then(response => response.json())
        .then(data => {
            if (data) {
              const stocks = data.stocks
              const funds = data.funds
              const stockPortfolio = data.stockPortfolio
                // ToDo: Create const called stocks that is equal to data.stocks
                // ToDo: Create const called funds that is equal to data.funds
                // ToDo: Create const called stockPortfolio that is equal to data.stockPortfolio

                //ToDo: Create a const called portfolio that is a data object {}
                    //ToDo: Inside portfolio add stockPortfolio and funds
              const portfolio = { stockPortfolio, funds }
                //ToDo: using vuex commit method pass 'SET_STOCKS' and stocks
                //ToDo: using vuex commit method pass 'SET_PORTFOLIO' and portfolio
              commit('SET_STOCKS', stocks)
              commit('SET_PORTFOLIO', portfolio)
            }
        });
};