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

class Queue

  attr_reader :queue

  def initialize
    @queue = []
  end

  def enqueue(el)
    queue.unshift(el)
  end

  def dequeue
    queue.pop
  end

  def show
    p queue
  end

end
