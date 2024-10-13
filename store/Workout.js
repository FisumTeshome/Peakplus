

module.exports=(sequelize,DataTypes) =>{
    const UserWorks=sequelize.define("UserWorks",{
        user: {
            type: DataTypes.STRING,
            references: {
              model: User, // Reference to User model
              key: 'Name',    // Key in User model to reference
            }
          },
        catagory: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        workoutName: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true,
            unique: true,
        },
        sets: {
            type: DataTypes.INTEGER,
            allowNull: true,
            default: null,

        },
        reps: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Weight: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        calorieBurn: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            default :Date,now,
            allowNull: false,
        },
        
    },
    {timestamps: true}
);
    return UserWorks;
}