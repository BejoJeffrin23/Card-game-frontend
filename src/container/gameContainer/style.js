import Styled from "styled-components";

const ProductCard = Styled.div`
    border-radius: 10px;
    background-color: #fff;
    position: relative;
    
    @media only screen and (max-width: 767px){
        max-width: 350px;
        margin: 0 auto;
    }
    &.list-view{
        max-width: 100%;
        .product-single-price__offer{
            @media only screen and (max-width: 991px) and (min-width: 768px){
                display: block;
            }
        }
    }
    .product-list{
        background-color: #fff;
        padding: 20px;
        border-radius: 10px;
        figure{
            ${({ theme }) =>
              theme.rtl ? "margin-left" : "margin-right"}: 15px;
            @media only screen and (max-width: 1199px){
                ${({ theme }) =>
                  theme.rtl ? "margin-left" : "margin-right"}: 0;
            }
            @media only screen and (max-width: 991px){
                margin: 0 0 20px;
            }
            img{
                border-radius: 10px;
            }
        }
        .product-single-description{
            p{
                color: ${({ theme }) => theme["gray-color"]};
                font-size: 15px;
            }
        }
        .product-single-title{
            font-size: 18px;
            margin: 25px 0 16px;
            @media only screen and (max-width: 1199px){
                margin: 0 0 16px;
            }
        }
        .product-single-info{
            margin-top: 25px;
            @media only screen and (max-width: 1199px){
                margin-top: 0;
            }
        }
        .product-single-price__new{
            font-size: 16px;
        }
        .product-single-action{
            flex-flow: column;
            align-items: center;
            button{
                min-width: 132px;
                margin: 0;
            }
            .btn-cart{
                margin: 0 0 10px;
            }
            .ant-btn-sm{
                height: 38px;
            }
        }
        .btn-heart{
            @media only screen and (max-width: 1599px){
                top: 0;
                ${({ theme }) => (theme.rtl ? "left" : "right")}: 10px;
            }
            @media only screen and (max-width: 1199px){
                top: -4px;
                ${({ theme }) => (theme.rtl ? "left" : "right")}: 0;
            }
            @media only screen and (max-width: 991){
                top: 0;
            }
        }
    }
    figure{
        margin-bottom: 0;
        img{
            width: 100%;
            border-radius:10px;
        }
    }
    figcaption{
        padding: 20px 20px 26px;
    }
    .btn-heart{
        position: absolute;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 34px;
        height: 34px;
        ${({ theme }) => (theme.rtl ? "left" : "right")}: 20px;
        top: 15px;
        background-color: #fff;
        border-radius: 50%;
        box-shadow: 0 5px 10px ${({ theme }) => theme["light-color"]}15;
    }
    .product-single-title{
        margin-bottom: 8px;
        font-size: 15px;
        font-weight: 500;
        a{
            color: ${({ theme }) => theme["dark-color"]};
            &:hover{
                color: ${({ theme }) => theme["primary-color"]};
            }
        }
    }
    .product-single-price{
        margin-bottom: 5px;
        del{
            margin: 0 5px;
        }
        .total-reviews{
            font-weight: 400;
            ${({ theme }) =>
              !theme.rtl ? "margin-left" : "margin-right"}: 6px;
            color: #ADB4D2;
        }
    }
    .product-single-price__new{
        font-weight: 600;
        color: ${({ theme }) => theme["primary-color"]};
    }
    .product-single-price__offer{
        font-weight: 500;
        font-size: 12px;
        color: ${({ theme }) => theme["secondary-color"]};
    }
    .product-single-rating{
        font-size: 12px;
        font-weight: 500;
        .ant-rate{
            ${({ theme }) => (theme.rtl ? "margin-left" : "margin-right")}: 5px;
        }
        .ant-rate-star:not(:last-child) {
            ${({ theme }) =>
              !theme.rtl ? "margin-right" : "margin-left"}: 2px !important;
        }
        .total-reviews{
            font-weight: 400;
            ${({ theme }) =>
              !theme.rtl ? "margin-left" : "margin-right"}: 6px;
             color: #9299B8;
        }
    }
    .active-button{
        text-align:${({ theme }) => (!theme.rtl ? "right" : "left")};
        padding:0px 1px 0px 0px;

        @media only screen and (min-width: 991px){
            padding:0px 10px 0px 0px;
        } 
    }
    .product-single-action{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin: 21px -5px -5px -5px;
        button{
            margin: 5px;
        }
        .ant-btn-default{
            border-color: ${({ theme }) => theme["border-color-normal"]};
            &:hover{
                border-color: ${({ theme }) => theme["primary-color"]};
            }
        }
        .ant-btn-white{
            &:hover{
                border-color: ${({ theme }) =>
                  theme["primary-color"]} !important;
            }
        }
        .ant-btn-sm{
            font-size: 12px;
            padding: 0px 18.065px;
            height: 36px;
        }
    }
`;

const CardStyleWrapper = Styled.div`
width:100%;
text-align:center;

.card-container {
    position: relative;
    border-radius:20px;
    z-index: 1;
    margin: 20px auto;
    max-width: 250px;
    height: 250px;
    perspective: 1000px;
  }

.front,.back{
    border: 1px solid black;
    width: 250px;
    height: 270px;
    overflow: hidden;
    backface-visibility: hidden;
    position: absolute;
    transition: transform .6s linear;
  }
.front {
    background: whitesmoke;
    transform: perspective(600px) rotateY(0deg);
}
.back{
    background: skyblue;
     transform: perspective(600px) rotateY(-180deg); 
}

.card.rotated > .front{
    transform: perspective(600px) rotateY(180deg);
  }
.card.rotated > .back{ 
    transform: perspective(600px) rotateY(0deg);
  }  


`;

export { CardStyleWrapper, ProductCard };
