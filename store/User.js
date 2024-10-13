

module.exports=(sequelize,DataTypes) =>{
    const UserInfo=sequelize.define("UserInfo",{
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
            default: null,

        },
        age: {
            type: DataTypes.INTIGER,
            allowNull: false,
        },
        
    },
);
    return UserInfo;
}