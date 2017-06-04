class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    until game_over
      take_turn
    end
    game_over_message
    reset_game
  end

  def take_turn
    p show_sequence
    sleep(1)
    system "clear"
    require_sequence
    unless game_over
      round_success_message
      @sequence_length += 1
    end
  end

  def show_sequence
    seq
    add_random_color
  end

  def require_sequence
    user_seq_guess = []
    i = 0
    until user_seq_guess.length == sequence_length
      p "Make a guess"
      user_seq_guess << gets.chomp
      if user_seq_guess[i] != seq[i]
        @game_over = true
        return
      end
      i += 1
    end
  end

  def add_random_color
    seq << COLORS.sample
  end

  def round_success_message
    puts "Correct!"
  end

  def game_over_message
    puts "That wasn't the correct color"
  end

  def reset_game
    @seq = []
    @sequence_length = 1
    @game_over = false
  end
end

Simon.new.play
