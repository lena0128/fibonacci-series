def fibonacci(num)
  # type your code in here

  last_two = [0, 1]

  # num = 0, return 0
  # num = 1, return 1
  if num < 2
    return last_two[num]
  end
  
    (num -1).times do
      sum = last_two[0] + last_two[1]
      last_two = [last_two[1], sum]
    end
    last_two.last
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 0"
  puts "=>", fibonacci(0)

  puts

  puts "Expecting: 1"
  puts "=>", fibonacci(2)

  puts

  puts "Expecting: 55"
  puts "=>", fibonacci(10)

  # Don't forget to add your own!
  puts "Expecting: 8"
  puts "=>", fibonacci(6)
end

# Please add your pseudocode to this file
# And a written explanation of your solution
