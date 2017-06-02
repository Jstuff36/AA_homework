class Stack

  attr_reader :stack

  def initialize
    @stack = []
  end

  def add(el)
    stack.push(el)
  end

  def remove
    stack.pop
  end

  def show
    p stack
  end

end
