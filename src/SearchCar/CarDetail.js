import React, {useEffect, useState} from 'react';
import back from "../img/back.svg";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import {useQuery} from "@apollo/client";
import {FETCH_CAR_BY_ID_QUERY, FETCH_CARS_BY_CITY_QUERY} from "../utils/graphql-request";
import {getFiles, resetCar, setCar} from "../redux/action/car";
import iconExample from "../img/team/4.png"
import star from "../img/star.png";
import {Calendar} from "../components/calendar/Calendar";
import {Review} from "../components/review/Review";
import {toImg} from "../utils/toImg";
import {toPriceView} from "../utils/toPriceView";
import {setCurrentDrive} from "../redux/action/drive";

const options = [
        {name: "isLosfix", label: "Крепления Iosfix", img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAxOCAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0IDIuNUMxNCAzLjkgMTIuOSA1IDExLjUgNUMxMC4xIDUgOSAzLjkgOSAyLjVDOSAxLjEgMTAuMSAwIDExLjUgMEMxMi45IDAgMTQgMS4xIDE0IDIuNVpNMTIgNkgxMS4yQzkuMSA2IDcuMSA0LjggNi4xIDIuOUM2IDIuOCA1LjkgMi43IDUuOSAyLjZMNC4xIDMuNEM0LjYgNC44IDYuMiA2LjYgOC41IDcuNUw2LjcgMTIuNUwyLjggMTEuNEwwIDE2LjlMMiAxNy40TDMuOCAxMy44TDguMyAxNUM5LjMgMTUuMiAxMC4zIDE0LjcgMTAuNyAxMy44TDEzIDcuNEMxMy4yIDYuNyAxMi43IDYgMTIgNlpNMTUuOSA1TDEyLjUgMTQuNEMxMS45IDE2IDEwLjQgMTcgOC44IDE3QzguNSAxNyA4LjEgMTcgNy44IDE2LjlMNC45IDE2LjFMNCAxNy45TDYgMTguNEw3LjQgMTguOEM3LjkgMTguOSA4LjQgMTkgOC45IDE5QzExLjQgMTkgMTMuNiAxNy41IDE0LjUgMTUuMUwxOCA1SDE1LjlaIiBmaWxsPSIjNjFBMTk5Ii8+Cjwvc3ZnPgo="},
        {name: "isAirbags", label: "Подушки безопасности", img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxNiAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDZDMTAgNi42NTY2MSA5Ljg3MDY3IDcuMzA2NzkgOS42MTk0IDcuOTEzNDJDOS4zNjgxMiA4LjUyMDA0IDguOTk5ODMgOS4wNzEyNCA4LjUzNTUzIDkuNTM1NTNDOC4wNzEyNCA5Ljk5OTgzIDcuNTIwMDQgMTAuMzY4MSA2LjkxMzQyIDEwLjYxOTRDNi4zMDY3OSAxMC44NzA3IDUuNjU2NjEgMTEgNSAxMUMzLjY3MzkyIDExIDIuNDAyMTUgMTAuNDczMiAxLjQ2NDQ3IDkuNTM1NTNDMC41MjY3ODQgOC41OTc4NSAwIDcuMzI2MDggMCA2QzAgNC42NzM5MiAwLjUyNjc4NCAzLjQwMjE1IDEuNDY0NDcgMi40NjQ0N0MyLjQwMjE1IDEuNTI2NzggMy42NzM5MiAxIDUgMUM1LjY1NjYxIDEgNi4zMDY3OSAxLjEyOTMzIDYuOTEzNDIgMS4zODA2QzcuNTIwMDQgMS42MzE4OCA4LjA3MTI0IDIuMDAwMTcgOC41MzU1MyAyLjQ2NDQ3QzguOTk5ODMgMi45Mjg3NiA5LjM2ODEyIDMuNDc5OTUgOS42MTk0IDQuMDg2NThDOS44NzA2NyA0LjY5MzIxIDEwIDUuMzQzMzkgMTAgNlpNNi40NiAxMy41NUw5IDE2LjAzTDcgMTYuMDVMMy41IDE5LjU4TDIgMTguMDlMNi40NiAxMy41NVpNMTMgMEMxNC4wOCAwIDE1IDAuODggMTUgMkMxNSAzLjA4IDE0LjEyIDQgMTMgNEMxMS45MiA0IDExIDMuMTIgMTEgMkMxMSAwLjkyIDExLjg5IDAgMTMgMFpNMTAuNDEgMTNINy41OUwxMy4yOSAxOC43MUwxNC43MSAxNy4yOUwxMC40MSAxM1pNMTEuMTIgMTIuMjlMMTUuNDEgMTYuNTlMMTUuNjMgMTYuOEMxNS44NiAxNi40MiAxNiAxNiAxNiAxNS41VjcuNUMxNiA2LjgzNjk2IDE1LjczNjYgNi4yMDEwNyAxNS4yNjc4IDUuNzMyMjNDMTQuNzk4OSA1LjI2MzM5IDE0LjE2MyA1IDEzLjUgNUMxMi44MzcgNSAxMi4yMDExIDUuMjYzMzkgMTEuNzMyMiA1LjczMjIzQzExLjI2MzQgNi4yMDEwNyAxMSA2LjgzNjk2IDExIDcuNVYxMi4xN0wxMS4xMiAxMi4yOVoiIGZpbGw9IiM2MUExOTkiLz4KPC9zdmc+Cg=="},
        {name: "isHeater", label: "Автономный подогреватель", img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAyNCAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjUgMEMxMS4xMDIyIDAgMTAuNzIwNiAwLjE1ODAzNSAxMC40MzkzIDAuNDM5MzRDMTAuMTU4IDAuNzIwNjQ0IDEwIDEuMTAyMTggMTAgMS41VjEzLjVDOS4zNyAxMy45NyA5IDE0LjcxIDkgMTUuNUM5IDE2LjE2MyA5LjI2MzM5IDE2Ljc5ODkgOS43MzIyMyAxNy4yNjc4QzEwLjIwMTEgMTcuNzM2NiAxMC44MzcgMTggMTEuNSAxOEMxMi4xNjMgMTggMTIuNzk4OSAxNy43MzY2IDEzLjI2NzggMTcuMjY3OEMxMy43MzY2IDE2Ljc5ODkgMTQgMTYuMTYzIDE0IDE1LjVDMTQgMTQuNzEgMTMuNjMgMTQgMTMgMTMuNVYxMkgxN1YxMEgxM1Y4SDE3VjZIMTNWNEgxN1YySDEzVjEuNUMxMyAxLjEwMjE4IDEyLjg0MiAwLjcyMDY0NCAxMi41NjA3IDAuNDM5MzRDMTIuMjc5NCAwLjE1ODAzNSAxMS44OTc4IDAgMTEuNSAwWk0wIDE0VjE2QzAuNjcgMTYgMC43OSAxNi4yMSAxLjI5IDE2LjcxQzEuNzkgMTcuMjEgMi42NyAxOCA0IDE4QzUuMzMgMTggNi4yMSAxNy4yMSA2LjcxIDE2LjcxQzYuODIgMTYuNTkgNi45MSAxNi41IDcgMTYuNDFWMTQuMTZDNi4yMSAxNC40MiA1LjY1IDE0LjkzIDUuMjkgMTUuMjlDNC43OSAxNS43OSA0LjY3IDE2IDQgMTZDMy4zMyAxNiAzLjIxIDE1Ljc5IDIuNzEgMTUuMjlDMi4yMSAxNC43OSAxLjMzIDE0IDAgMTRaTTE2IDE0VjE2QzE2LjY3IDE2IDE2Ljc5IDE2LjIxIDE3LjI5IDE2LjcxQzE3Ljc5IDE3LjIxIDE4LjY3IDE4IDIwIDE4QzIxLjMzIDE4IDIyLjIxIDE3LjIxIDIyLjcxIDE2LjcxQzIzLjIxIDE2LjIxIDIzLjMzIDE2IDI0IDE2VjE0QzIyLjY3IDE0IDIxLjc5IDE0Ljc5IDIxLjI5IDE1LjI5QzIwLjc5IDE1Ljc5IDIwLjY3IDE2IDIwIDE2QzE5LjMzIDE2IDE5LjIxIDE1Ljc5IDE4LjcxIDE1LjI5QzE4LjIxIDE0Ljc5IDE3LjMzIDE0IDE2IDE0Wk04IDE5QzYuNjcgMTkgNS43OSAxOS43OSA1LjI5IDIwLjI5QzQuNzkgMjAuNzkgNC42NyAyMSA0IDIxQzMuMzMgMjEgMy4yMSAyMC43OSAyLjcxIDIwLjI5QzIuMzUgMTkuOTMgMS43OSAxOS40MiAxIDE5LjE2VjIxLjQxQzEuMDkgMjEuNSAxLjE4IDIxLjU5IDEuMjkgMjEuNzFDMS43OSAyMi4yMSAyLjY3IDIzIDQgMjNDNS4zMyAyMyA2LjIxIDIyLjIxIDYuNzEgMjEuNzFDNy4yMSAyMS4yMSA3LjMzIDIxIDggMjFDOC42NyAyMSA4Ljc5IDIxLjIxIDkuMjkgMjEuNzFDOS43MyAyMi4xNCAxMC40NCAyMi44IDExLjUgMjIuOTZDMTEuNjYgMjMgMTEuODMgMjMgMTIgMjNDMTMuMzMgMjMgMTQuMjEgMjIuMjEgMTQuNzEgMjEuNzFDMTUuMjEgMjEuMjEgMTUuMzMgMjEgMTYgMjFDMTYuNjcgMjEgMTYuNzkgMjEuMjEgMTcuMjkgMjEuNzFDMTcuNzkgMjIuMjEgMTguNjcgMjMgMjAgMjNDMjEuMzMgMjMgMjIuMjEgMjIuMjEgMjIuNzEgMjEuNzFDMjIuODIgMjEuNTkgMjIuOTEgMjEuNSAyMyAyMS40MVYxOS4xNkMyMi4yMSAxOS40MiAyMS42NSAxOS45MyAyMS4yOSAyMC4yOUMyMC43OSAyMC43OSAyMC42NyAyMSAyMCAyMUMxOS4zMyAyMSAxOS4yMSAyMC43OSAxOC43MSAyMC4yOUMxOC4yMSAxOS43OSAxNy4zMyAxOSAxNiAxOUMxNC42NyAxOSAxMy43OSAxOS43OSAxMy4yOSAyMC4yOUMxMi43OSAyMC43OSAxMi42NyAyMSAxMiAyMUMxMS43OCAyMSAxMS42MyAyMC45NyAxMS41IDIwLjkyQzExLjIyIDIwLjgyIDExLjA1IDIwLjYzIDEwLjcxIDIwLjI5QzEwLjIxIDE5Ljc5IDkuMzMgMTkgOCAxOVoiIGZpbGw9IiM2MUExOTkiLz4KPC9zdmc+Cg=="},
        {name: "isAuxCable", label: "AUX-кабель", img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMiAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuMDUwMTIgMS41MDA3OEM0LjY4MDEyIDIuODgwNzggNC42ODAxMiA1LjEwMDc4IDYuMDUwMTIgNi40NzA3OEwxNC41NDAxIDE0Ljk1MDhDMTUuMTIwMSAxNS41NDA4IDE1LjEyMDEgMTYuNTAwOCAxNC41NDAxIDE3LjA3MDhDMTMuOTUwMSAxNy42NjA4IDEzLjAwMDEgMTcuNjYwOCAxMi40MTAxIDE3LjA3MDhMOC4xNzAxMiAxMi44MzA4TDkuMjMwMTIgMTEuNzcwOEw1LjcwMDEyIDguMjMwNzhMNS4zNDAxMiA4LjU5MDc4TDMuOTMwMTIgNy4xNzA3OEMzLjU0MDEyIDYuNzgwNzggMi45MTAxMiA2Ljc4MDc4IDIuNTAwMTIgNy4xNzA3OEwxLjEwMDEyIDguNTkwNzhDMC43MTAxMTcgOS4wMDA3OCAwLjcxMDExNyA5LjYxMDc4IDEuMTAwMTIgMTAuMDAwOEwyLjUwMDEyIDExLjQxMDhMMi4xNjAxMiAxMS43NzA4TDUuNzAwMTIgMTUuMzAwOEw2Ljc2MDEyIDE0LjI0MDhMMTEuMDAwMSAxOC41MDA4QzEyLjM3MDEgMTkuODUwOCAxNC41ODAxIDE5Ljg1MDggMTUuOTUwMSAxOC41MDA4QzE3LjMyMDEgMTcuMTIwOCAxNy4zMjAxIDE0LjkwMDggMTUuOTUwMSAxMy41NDA4TDcuNDYwMTIgNS4wNTA3OEM2Ljg4MDEyIDQuNDYwNzggNi44ODAxMiAzLjUwMDc4IDcuNDYwMTIgMi45MzA3OEM4LjA1MDEyIDIuMzQwNzggOS4wMDAxMiAyLjM0MDc4IDkuNTkwMTIgMi45MzA3OEwxMy44MzAxIDcuMTcwNzhMMTIuNzcwMSA4LjIzMDc4TDE2LjMwMDEgMTEuNzcwOEwxNi42NjAxIDExLjQxMDhMMTguMDcwMSAxMi44MzA4QzE4LjQ2MDEgMTMuMjIwOCAxOS4xMDAxIDEzLjIyMDggMTkuNTAwMSAxMi44MzA4TDIwLjkwMDEgMTEuNDEwOEMyMS4yOTAxIDExLjAwMDggMjEuMjkwMSAxMC4zOTA4IDIwLjkwMDEgMTAuMDAwOEwxOS41MDAxIDguNTkwNzhMMTkuODQwMSA4LjIzMDc4TDE2LjMwMDEgNC43MDA3OEwxNS4yNDAxIDUuNzYwNzhMMTEuMDAwMSAxLjUwMDc4QzkuNjMwMTIgMC4xNTA3ODEgNy40MjAxMiAwLjE1MDc4MSA2LjA1MDEyIDEuNTAwNzhaTTEuODEwMTIgOS4yOTA3OEwzLjIyMDEyIDcuODgwNzhMNC42NDAxMiA5LjI5MDc4TDMuMjIwMTIgMTAuNzEwOEwxLjgxMDEyIDkuMjkwNzhaTTE3LjM2MDEgMTAuNzEwOEwxOC43ODAxIDkuMjkwNzhMMjAuMTkwMSAxMC43MTA4TDE4Ljc4MDEgMTIuMTIwOEwxNy4zNjAxIDEwLjcxMDhaIiBmaWxsPSIjNjFBMTk5Ii8+Cjwvc3ZnPgo="},
        {name: "isBluetooth", label: "Поддержка Bluetooth", img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxMyAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuODggMTQuMjlMOCAxNi4xN1YxMi40MUw5Ljg4IDE0LjI5Wk04IDMuODNMOS44OCA1LjcxTDggNy41OFYzLjgzWk0xMi43MSA1LjcxTDcgMEg2VjcuNThMMS40MSAzTDAgNC40MUw1LjU5IDEwTDAgMTUuNThMMS40MSAxN0w2IDEyLjQxVjIwSDdMMTIuNzEgMTQuMjlMOC40MSAxMEwxMi43MSA1LjcxWiIgZmlsbD0iIzYxQTE5OSIvPgo8L3N2Zz4K"},
        {name: "isCruise", label: "Круиз-контроль", img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwIDEzQzIwIDE1LjYgMTguOCAxNy45IDE2LjkgMTkuM0wxNi40IDE4LjhMMTQuMyAxNi43TDE1LjcgMTUuM0wxNi45IDE2LjVDMTcuNCAxNS44IDE3LjggMTQuOSAxNy45IDE0SDE2VjEySDE3LjlDMTcuNyAxMS4xIDE3LjQgMTAuMyAxNi45IDkuNUwxNS43IDEwLjdMMTQuMyA5LjNMMTUuNSA4LjFDMTQuOCA3LjYgMTMuOSA3LjIgMTMgNy4xVjlIMTFWNy4xQzEwLjEgNy4zIDkuMyA3LjYgOC41IDguMUwxMS41IDExLjFDMTEuNyAxMS4xIDExLjggMTEgMTIgMTFDMTIuNTMwNCAxMSAxMy4wMzkxIDExLjIxMDcgMTMuNDE0MiAxMS41ODU4QzEzLjc4OTMgMTEuOTYwOSAxNCAxMi40Njk2IDE0IDEzQzE0IDEzLjUzMDQgMTMuNzg5MyAxNC4wMzkxIDEzLjQxNDIgMTQuNDE0MkMxMy4wMzkxIDE0Ljc4OTMgMTIuNTMwNCAxNSAxMiAxNUMxMS40Njk2IDE1IDEwLjk2MDkgMTQuNzg5MyAxMC41ODU4IDE0LjQxNDJDMTAuMjEwNyAxNC4wMzkxIDEwIDEzLjUzMDQgMTAgMTNDMTAgMTIuOCAxMCAxMi43IDEwLjEgMTIuNUw3LjEgOS41QzYuNiAxMC4yIDYuMiAxMS4xIDYuMSAxMkg4VjE0SDYuMUM2LjMgMTQuOSA2LjYgMTUuNyA3LjEgMTYuNUw4LjMgMTUuM0w5LjcgMTYuN0w3LjEgMTkuM0M1LjIgMTcuOSA0IDE1LjYgNCAxM0M0IDEwLjg3ODMgNC44NDI4NSA4Ljg0MzQ0IDYuMzQzMTUgNy4zNDMxNUM3Ljg0MzQ0IDUuODQyODUgOS44NzgyNyA1IDEyIDVDMTQuMTIxNyA1IDE2LjE1NjYgNS44NDI4NSAxNy42NTY5IDcuMzQzMTVDMTkuMTU3MSA4Ljg0MzQ0IDIwIDEwLjg3ODMgMjAgMTNaTTQuNyAzLjNMMS40IDBMMCAxLjRMMy4zIDQuN0wyIDZINlYyTDQuNyAzLjNaIiBmaWxsPSIjNjFBMTk5Ii8+Cjwvc3ZnPgo="},
        {name: "isConditioning", label: "Кондиционер", img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4Ljc5MDIgMTEuOTVMMTYuNDYwMiAxMi41N0wxNC40NjAyIDExLjQ0VjguNTZMMTYuNDYwMiA3LjQzTDE4Ljc5MDIgOC4wNUwxOS4zMTAyIDYuMTJMMTcuNTQwMiA1LjY1TDE4LjAwMDIgMy44OEwxNi4wNzAyIDMuMzZMMTUuNDUwMiA1LjY5TDEzLjQ1MDIgNi44MkwxMS4wMDAyIDUuMzhWMy4xMkwxMi43MTAyIDEuNDFMMTEuMjkwMiAwTDEwLjAwMDIgMS4yOUw4LjcxMDIgMEw3LjI5MDIgMS40MUw5LjAwMDIgMy4xMlY1LjM4TDYuNTAwMiA2LjgyTDQuNTAwMiA1LjY5TDMuOTIwMiAzLjM2TDIuMDAwMiAzLjg4TDIuNDcwMiA1LjY1TDAuNzAwMTk1IDYuMTJMMS4yMjAyIDguMDVMMy41NTAyIDcuNDNMNS41NTAyIDguNTZWMTEuNDVMMy41NTAyIDEyLjU4TDEuMjIwMiAxMS45NkwwLjcwMDE5NSAxMy44OUwyLjQ3MDIgMTQuMzZMMi4wMDAyIDE2LjEyTDMuOTMwMiAxNi42NEw0LjU1MDIgMTQuMzFMNi41NTAyIDEzLjE4TDkuMDAwMiAxNC42MlYxNi44OEw3LjI5MDIgMTguNTlMOC43MTAyIDIwTDEwLjAwMDIgMTguNzFMMTEuMjkwMiAyMEwxMi43MDAyIDE4LjU5TDExLjAwMDIgMTYuODhWMTQuNjJMMTMuNTAwMiAxMy4xN0wxNS41MDAyIDE0LjNMMTYuMTIwMiAxNi42M0wxOC4wMDAyIDE2LjEyTDE3LjUzMDIgMTQuMzVMMTkuMzAwMiAxMy44OEwxOC43OTAyIDExLjk1Wk03LjUwMDIgOC41NkwxMC4wMDAyIDcuMTFMMTIuNTAwMiA4LjU2VjExLjQ0TDEwLjAwMDIgMTIuODlMNy41MDAyIDExLjQ0VjguNTZaIiBmaWxsPSIjNjFBMTk5Ii8+Cjwvc3ZnPgo="},
        {name: "isMultimedia", label: "Мультимедия", img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxOSAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDBIMFYySDEyVjBaTTEyIDRIMFY2SDEyVjRaTTAgMTBIOFY4SDBWMTBaTTE0IDBWOC4xOEMxMy42OSA4LjA3IDEzLjM1IDggMTMgOEMxMi4yMDQ0IDggMTEuNDQxMyA4LjMxNjA3IDEwLjg3ODcgOC44Nzg2OEMxMC4zMTYxIDkuNDQxMjkgMTAgMTAuMjA0NCAxMCAxMUMxMCAxMS43OTU2IDEwLjMxNjEgMTIuNTU4NyAxMC44Nzg3IDEzLjEyMTNDMTEuNDQxMyAxMy42ODM5IDEyLjIwNDQgMTQgMTMgMTRDMTMuNzk1NiAxNCAxNC41NTg3IDEzLjY4MzkgMTUuMTIxMyAxMy4xMjEzQzE1LjY4MzkgMTIuNTU4NyAxNiAxMS43OTU2IDE2IDExVjJIMTlWMEgxNFoiIGZpbGw9IiM2MUExOTkiLz4KPC9zdmc+Cg=="},
        {name: "isNavigation", label: "Навигация", img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAxNiAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEwwLjUgMTguMjlMMS4yMSAxOUw4IDE2TDE0Ljc5IDE5TDE1LjUgMTguMjlMOCAwWiIgZmlsbD0iIzYxQTE5OSIvPgo8L3N2Zz4K"},
        {name: "isSeatsVentilation", label: "Вентиляция сидений", img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4LjggOC4yTDE3LjQgOC42TDE2LjIgNy45VjYuMkwxNy40IDUuNUwxOC44IDUuOUwxOS4xIDQuOEwxOCA0LjVMMTguMyAzLjRMMTcuMiAzLjFMMTYuOCA0LjVMMTUuNiA1LjJMMTQuMSA0LjNWM0wxNS4xIDJMMTQuMyAxLjJMMTMuNSAyTDEyLjcgMS4yTDExLjkgMkwxMi45IDNWNC4zTDExLjQgNS4yTDEwLjIgNC41TDkuOSAzLjFMOC44IDMuNEw5LjEgNC41TDggNC43TDguMyA1LjhMOS43IDUuNEwxMC45IDYuMVY3LjhMOS43IDguNUw4LjMgOC4xTDggOS40TDkuMSA5LjdMOC44IDEwLjdMOS45IDExTDEwLjMgOS42TDExLjUgOC45TDEzIDkuOFYxMS4xTDEyIDEyLjFMMTIuOCAxMi45TDEzLjYgMTIuMUwxNC40IDEyLjlMMTUuMiAxMi4xTDE0LjIgMTEuMVY5LjhMMTUuNyA4LjlMMTYuOSA5LjZMMTcuMyAxMUwxOC40IDEwLjdMMTggOS42TDE5LjEgOS4zTDE4LjggOC4yWk0xMiA2LjJMMTMuNSA1LjNMMTUgNi4yVjcuOUwxMy41IDguOEwxMiA3LjlWNi4yWk0zIDE2QzMgMTYgMCA4IDAgNEMwIDAgMiAwIDIgMEgzQzMgMCA0IDAgNCAxQzQgMiAzIDIgMyA0QzMgNiA2IDggNiAxMUM2IDE0IDMgMTYgMyAxNlpNMTMgMTVDMTQuMSAxNSAxNSAxNS45IDE1IDE3VjE4QzE1IDE5LjEgMTQuMSAyMCAxMyAyMEg3QzUgMjAgNCAxOC4yIDQgMTguMkMzLjggMTggMy43IDE3LjYgNCAxNy40QzQgMTcuNCA3IDE0LjkgOCAxNC45SDEzVjE1WiIgZmlsbD0iIzYxQTE5OSIvPgo8L3N2Zz4K"},
        {name: "isSeatsHeat", label: "Подогрев сидений", img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMgMTZDMyAxNiAwIDggMCA0QzAgMCAyIDAgMiAwSDNDMyAwIDQgMCA0IDFDNCAyIDMgMiAzIDRDMyA2IDYgOCA2IDExQzYgMTQgMyAxNiAzIDE2Wk0xMyAxNUMxNC4xIDE1IDE1IDE1LjkgMTUgMTdWMThDMTUgMTkuMSAxNC4xIDIwIDEzIDIwSDdDNSAyMCA0IDE4LjIgNCAxOC4yQzMuOCAxOCAzLjcgMTcuNiA0IDE3LjRDNCAxNy40IDcgMTQuOSA4IDE0LjlIMTNWMTVaTTExLjcgMS40TDEwLjMgNC44TDExLjcgOC4yTDkuNyAxM0w4IDExLjZMOS40IDguMkw4IDQuOEwxMCAwTDExLjcgMS40Wk0xNS45IDEuNEwxNC41IDQuOEwxNS45IDguMkwxMy45IDEzTDEyLjIgMTEuNkwxMy42IDguMkwxMi4yIDQuOEwxNC4yIDBMMTUuOSAxLjRaTTIwIDEuNEwxOC42IDQuOEwyMCA4LjJMMTggMTNMMTYuMyAxMS42TDE3LjcgOC4yTDE2LjMgNC44TDE4LjMgMEwyMCAxLjRaIiBmaWxsPSIjNjFBMTk5Ii8+Cjwvc3ZnPgo="},
        {name: "isRoofRack", label: "Багажник на крыше", img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAyMCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwIDE2SDBWMThIMjBWMTZaTTIgMTJDMiAxMi41IDIuMiAxMyAyLjYgMTMuNEMzIDEzLjggMy41IDE0IDQgMTRWM0MzLjUgMyAzIDMuMiAyLjYgMy42QzIuMiA0IDIgNC41IDIgNVYxMlpNMTEuNSAzSDguNUM4LjUgMi42IDguNiAyLjIgOC45IDEuOUM5LjIgMS42IDkuNSAxLjUgMTAgMS41QzEwLjQgMS41IDEwLjggMS42IDExLjEgMS45QzExLjMgMi4yIDExLjUgMi42IDExLjUgM1pNNSAzVjE0SDE1VjNIMTNDMTMgMi4yIDEyLjcgMS41IDEyLjEgMC45QzExLjUgMC4zIDEwLjggMCAxMCAwQzkuMiAwIDguNSAwLjMgNy45IDAuOUM3LjMgMS41IDcgMi4yIDcgM0g1Wk0xNiAxNEMxNi41IDE0IDE3IDEzLjggMTcuNCAxMy40QzE3LjggMTMgMTggMTIuNSAxOCAxMlY1QzE4IDQuNSAxNy44IDQgMTcuNCAzLjZDMTcgMy4yIDE2LjUgMyAxNiAzVjE0WiIgZmlsbD0iIzYxQTE5OSIvPgo8L3N2Zz4K"},
        {name: "isParktronic", label: "Парктроники", img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxMyAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuMiA4SDRWNEg3LjJDNy43MzA0MyA0IDguMjM5MTQgNC4yMTA3MSA4LjYxNDIxIDQuNTg1NzlDOC45ODkyOSA0Ljk2MDg2IDkuMiA1LjQ2OTU3IDkuMiA2QzkuMiA2LjUzMDQzIDguOTg5MjkgNy4wMzkxNCA4LjYxNDIxIDcuNDE0MjFDOC4yMzkxNCA3Ljc4OTI5IDcuNzMwNDMgOCA3LjIgOFpNNyAwSDBWMThINFYxMkg3QzguNTkxMyAxMiAxMC4xMTc0IDExLjM2NzkgMTEuMjQyNiAxMC4yNDI2QzEyLjM2NzkgOS4xMTc0MiAxMyA3LjU5MTMgMTMgNkMxMyAyLjY4IDEwLjMxIDAgNyAwWiIgZmlsbD0iIzYxQTE5OSIvPgo8L3N2Zz4K"},
        {name: "isCamera", label: "Камера заднего вида", img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAyMCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgMkg1TDcgMEgxM0wxNSAySDE4QzE4LjUzMDQgMiAxOS4wMzkxIDIuMjEwNzEgMTkuNDE0MiAyLjU4NTc5QzE5Ljc4OTMgMi45NjA4NiAyMCAzLjQ2OTU3IDIwIDRWMTZDMjAgMTYuNTMwNCAxOS43ODkzIDE3LjAzOTEgMTkuNDE0MiAxNy40MTQyQzE5LjAzOTEgMTcuNzg5MyAxOC41MzA0IDE4IDE4IDE4SDJDMS40Njk1NyAxOCAwLjk2MDg1OSAxNy43ODkzIDAuNTg1Nzg2IDE3LjQxNDJDMC4yMTA3MTQgMTcuMDM5MSAwIDE2LjUzMDQgMCAxNlY0QzAgMy40Njk1NyAwLjIxMDcxNCAyLjk2MDg2IDAuNTg1Nzg2IDIuNTg1NzlDMC45NjA4NTkgMi4yMTA3MSAxLjQ2OTU3IDIgMiAyWk0xMCA1QzguNjczOTIgNSA3LjQwMjE1IDUuNTI2NzggNi40NjQ0NyA2LjQ2NDQ3QzUuNTI2NzggNy40MDIxNSA1IDguNjczOTIgNSAxMEM1IDExLjMyNjEgNS41MjY3OCAxMi41OTc5IDYuNDY0NDcgMTMuNTM1NUM3LjQwMjE1IDE0LjQ3MzIgOC42NzM5MiAxNSAxMCAxNUMxMS4zMjYxIDE1IDEyLjU5NzkgMTQuNDczMiAxMy41MzU1IDEzLjUzNTVDMTQuNDczMiAxMi41OTc5IDE1IDExLjMyNjEgMTUgMTBDMTUgOC42NzM5MiAxNC40NzMyIDcuNDAyMTUgMTMuNTM1NSA2LjQ2NDQ3QzEyLjU5NzkgNS41MjY3OCAxMS4zMjYxIDUgMTAgNVpNMTAgN0MxMC43OTU2IDcgMTEuNTU4NyA3LjMxNjA3IDEyLjEyMTMgNy44Nzg2OEMxMi42ODM5IDguNDQxMjkgMTMgOS4yMDQzNSAxMyAxMEMxMyAxMC43OTU2IDEyLjY4MzkgMTEuNTU4NyAxMi4xMjEzIDEyLjEyMTNDMTEuNTU4NyAxMi42ODM5IDEwLjc5NTYgMTMgMTAgMTNDOS4yMDQzNSAxMyA4LjQ0MTI5IDEyLjY4MzkgNy44Nzg2OCAxMi4xMjEzQzcuMzE2MDcgMTEuNTU4NyA3IDEwLjc5NTYgNyAxMEM3IDkuMjA0MzUgNy4zMTYwNyA4LjQ0MTI5IDcuODc4NjggNy44Nzg2OEM4LjQ0MTI5IDcuMzE2MDcgOS4yMDQzNSA3IDEwIDdaIiBmaWxsPSIjNjFBMTk5Ii8+Cjwvc3ZnPgo="},
    ]


const CarDetail = props => {
    const {loading, data} = useQuery(FETCH_CAR_BY_ID_QUERY, {
        variables: {id: props.match.params.id}
    })
    const car = props.state

    const [calendarState, setCalendarState] = useState(undefined)
    const begin = props.drive.current.begin
    const end = props.drive.current.end

    const setBegin = begin => props.setCurrentDrive({begin})
    const setEnd = end => props.setCurrentDrive({end})

    // const [begin, setBegin] = useState(undefined)
    // const [end, setEnd] = useState(undefined)

    useEffect(()=>{
        if(!calendarState) {
            const now = new Date()
            const year = now.getFullYear()
            const month = now.getMonth()
            const date = now.getDate()
            const newState = {
                current_month: month,
                current_year: year,
                next_month: month < 11 ? month+1 : 0,
                next_year: month < 11 ? year : year+1,
                prev_month: month > 0 ? month-1 : 11,
                prev_year: month > 0 ? year : year-1
            }
            setCalendarState(newState)
        }
    }, [])

    useEffect(() => {
        if (!loading) {
            props.setCar(data.findById)
            props.getFiles(data.findById.docs, 'doc')
            props.getFiles(data.findById.photos, 'photo')
        }
        return () => {
            if(!props.history.location.pathname.match('/car/rent/')) {
                props.resetCar()
            }
        }
    }, [data])

    if (!car.id) return null

    return (
        <div className="">
            <div className="content-container">
                <div className="car_detail">
                    <div className="register__step-back" onClick={() => props.history.push('/')}>
                        <img src={back}/>
                        <span>Назад</span>
                    </div>
                    <div className="collage_car">
                        <div className="collage_car__main">
                            {car.photo_files && toImg(car.photo_files[0])}
                        </div>
                        <div className="collage_car__add">
                            <div className="collage_car__add__up">
                                {car.photo_files && car.photo_files[1] && <img
                                    src={`data:${car.photo_files[1].mimetype};base64,${Buffer.from(car.photo_files[1].buffer).toString('base64')}`}/>}
                            </div>
                            {car.photo_files && car.photo_files[2] && <div className="collage_car__add__down">
                                <img
                                    src={`data:${car.photo_files[2].mimetype};base64,${Buffer.from(car.photo_files[2].buffer).toString('base64')}`}/>
                                <div className="collage_car__add__extra">
                                    {car.photo_files.length > 3 && <span>+ ещё {car.photo_files.length - 3} фото</span>}
                                </div>
                            </div>}
                        </div>
                    </div>
                    <div className="collage_car">
                        <div className="collage_car__main">
                            <div className="collage-car__main__title">
                                {car.mark} {car.model}, {car.year}
                            </div>
                            <div className="collage_car__main__price-wrapper">
                                <div className="collage_car__main__price-card">
                                    <div className="collage_car__main__price-card_title">{toPriceView(car.price)} ₽/сут.</div>
                                    <div>обычная аренда</div>
                                </div>
                                <div className="collage_car__main__price-card">
                                    <div className="collage_car__main__price-card_title">{toPriceView(car.price_3d)} ₽/сут.</div>
                                    <div>при аренде на 3 дня</div>
                                </div>
                                <div className="collage_car__main__price-card">
                                    <div className="collage_car__main__price-card_title">{toPriceView(car.price_5d)} ₽/сут.</div>
                                    <div>при аренде более 5 дней</div>
                                </div>
                            </div>
                            <div className="collage_car__main__desc-wrapper">
                                <div className="collage_car__main__desc-title">Характеристики</div>
                                <div className="collage_car__main__desc-item">
                                    <div className="collage_car__main__desc-item__left">Год выпуска</div>
                                    <div className="collage_car__main__desc-item__right">{car.year} год</div>
                                </div>
                                <div className="collage_car__main__desc-item">
                                    <div className="collage_car__main__desc-item__left">Двигатель</div>
                                    <div className="collage_car__main__desc-item__right">{car.engine_type}</div>
                                </div>
                                <div className="collage_car__main__desc-item">
                                    <div className="collage_car__main__desc-item__left">Трансмиссия</div>
                                    <div className="collage_car__main__desc-item__right">{car.transmission}</div>
                                </div>
                                <div className="collage_car__main__desc-item">
                                    <div className="collage_car__main__desc-item__left">Пробег</div>
                                    <div className="collage_car__main__desc-item__right">{car.run}</div>
                                </div>
                            </div>
                        </div>
                        <div className="collage_car__owner">
                            <div className="collage_car__owner-wrapper">
                                <div className="collage_car__owner__icon">
                                    <img src={iconExample}/>
                                </div>
                                <div className="collage_car__owner__name">Uwewe</div>
                                <div className="collage_car__owner__role">cop</div>
                                <div className="collage_car__owner__btn">Посмотреть профиль</div>
                            </div>
                        </div>
                    </div>
                    <div className="section-line"/>
                    <div className="collage_car__main__desc-title">
                        Опции
                    </div>
                    <div className="grid-container3">
                            {options.map((i, index) => {
                                return(
                                    <div className="grid-item" key={index}>
                                        <img className="icon-line" src={i.img} />
                                        {i.label}
                                    </div>
                                )
                            })}
                    </div>
                    <div className="section-line"/>
                    {/*<Calendar />*/}
                    <Calendar begin={begin} setBegin={setBegin}
                              end={end} setEnd={setEnd}
                              state={calendarState} setState={setCalendarState}/>
                    <div className="section-line"/>
                    <div className="collage_car__main__desc-title">
                        Отзывы
                    </div>
                    <div className="collage_car__main__reviews">
                        <img src={star}/>
                        <span>4,5</span>
                        <span>(4 отзыва)</span>
                    </div>
                    <div className="collage_car__reviews-list">
                        {[1, 2, 3, 4].map((e, i) => {
                            return <Review key={i}/>
                        })}
                    </div>
                    <div className="section-line"/>
                    <div className="btn-group">
                        <div onClick={()=>props.history.push(`/car/rent/${car.id}`)} className="btn-green">Арендовать</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    state: state.car, drive: state.drive
})

const mapDispatchToProps = {
    setCar, getFiles, resetCar, setCurrentDrive
}

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(CarDetail)
