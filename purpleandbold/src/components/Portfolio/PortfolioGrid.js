import React, { Component } from 'react';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import style from "./portfoliogrid.module.sass"
class PortfolioGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMounted: false,
            categoryArray: [],
            selectedCategories: [],
            isVisible: false,
            visibleClass: ""
        }
    }

    // loadPanels() {
    //     const itemArray = [...this.$refs["portfolio-grid-item"]];
    //     let index = 0;
    //     //removed an i parameter from this for each function on itemArray
    //     itemArray.forEach(function () {
    //         const el = itemArray[index];
    //         setTimeout(() => {
    //             el.classList.add("is-visible");
    //         }, index * 100);
    //         index++;
    //     });
    // }

    // itemSelected(index) {
    //     eventBus.openModal(index);
    //     eventBus.selected(true);
    // }

    // showNameOverlay(i) {
    //     const overlay = this.$refs.piecenameoverlay[i];
    //     overlay.classList.add("overlay-shown");
    // }

    // hideNameOverlay(i) {
    //     const overlay = this.$refs.piecenameoverlay[i];
    //     overlay.classList.remove("overlay-shown");
    // }
    render() {
        return (
            <div className={style.portfolio__grid} v-if="isMounted">
                {/* <TransitionGroup name="grid" tag="div" className={style.portfolio__grid__container}>

                    <template v-for="(piece,index) in filteredPortfolioPieces">
                        <div key="index"
                            class="[`item portfolio__grid__container__item`, piece.type.toLowerCase(), visibleClass]"
                            ref="`portfolio-grid-item`"
                            onClick="itemSelected(index)"
                            onMouseenter="showNameOverlay(index)"
                            onMouseleave="hideNameOverlay(index)">
                            <img src="piece.mainImg.src" alt="piece.mainImg.alt" />
                            <div className={style.portfolio__grid__container__item__name} ref="piecenameoverlay">
                                <h4>{piece.name}</h4>
                            </div>
                        </div>
                    </template>
                </TransitionGroup> */}
            </div>
        )
    }
}

export default PortfolioGrid;