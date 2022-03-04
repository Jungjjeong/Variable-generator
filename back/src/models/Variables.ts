import {DataTypes, Model} from "sequelize";
import sequelize from "../loaders/database";

export default class Variables extends Model {}

Variables.init({
  variableId : {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    comment : 'Variables 테이블의 Primary key'
  },
  description : {
    type: DataTypes.STRING,
    allowNull: false,
    comment : '사용자가 입력한 keyword(한글)'
  },
  translate : {
    type: DataTypes.STRING,
    allowNull: false,
    comment : '번역 api를 통해 번역된 결과'
  },
  result : {
    type: DataTypes.STRING,
    allowNull: false,
    comment : '모델을 통해 생성된 결과'
  },
  createdAt : {
    type: DataTypes.DATE,
    allowNull: false,
    comment : '검색된 날짜'
  },
  userId : {
    type: DataTypes.INTEGER,
    comment : '검색한 사람. 로그인을 하지 않으면 없을 수 있음'
  }
}, {
  sequelize,
  modelName: 'Variables'
});
