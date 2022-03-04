import {DataTypes, Model} from "sequelize";
import sequelize from "../loaders/database";

export default class Users extends Model {}

Users.init({
  userId : {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    comment : 'Users 테이블의 Primary key'
  },
  email : {
    type: DataTypes.STRING,
    allowNull: false,
    comment : '사용자 이메일'
  },
  password : {
    type: DataTypes.STRING,
    comment : '사용자의 비밀번호'
  },
  platformType : {
    type: DataTypes.STRING,
    comment : '소셜 로그인 유형'
  },
  signUpAt : {
    type: DataTypes.DATE,
    comment : '회원가입 날짜'
  },
  loginAt : {
    type: DataTypes.DATE,
    comment : '마지막 로그인 날짜'
  }
}, {
  sequelize,
  modelName: 'Users'
});
