// See https://aka.ms/new-console-template for more information

using System.Security.Principal;

namespace BankMgtApp
{
    public class CurrentAccount : AccountDetails
    {
        double _balance;

        public void Deposit(double amount)
        {
            Console.WriteLine("Your current balance is {0}", _balance);
            if (amount > 1000)
            {
                _balance += amount;
                Console.WriteLine("Thank you for deposite your total balance is {0}", _balance);
            }
            else
            {
                Console.WriteLine("Deposite must be greater than 1000");
            }
        }
        public void Withdraw(double amount)
        {
            if (_balance < amount)
            {
                Console.WriteLine(" insufficient balance");
            }
            else
            {
                _balance -= amount;
                Console.WriteLine("your total balance is {0}", _balance);
            }
        }

        public double Balance { get { return _balance; } }
    }
}